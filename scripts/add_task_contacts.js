/**
 * function to search through contacts based on who is assigned
 * 
 * @returns a list of full names of the assignedTo contacts
 */
async function searchContacts() {
  let assigneContacts = [];
  let contacts = await fetchData("/contacts/");
  let contactsArray = Object.values(contacts);

  for (id of assignedTo) {
    for (search of contactsArray) {
      if (search.id == id) {
        assigneContacts.push(search.firstname + " " + search.lastname);
      }
    }
  }
  return assigneContacts;
}

/**
 * function to show us a list of contacts, where the logged in user will be shown on top
 * 
 * @param {Array<Object>} contacts - array of contact objects where we use first and last name
 * @returns {void}
 */
function renderContactList(contacts) {
  const allMembersRef = document.getElementById("allMembers");
  const username = sessionStorage.getItem("loggedInUser");

  if (!contacts) return;
  let withLoggedInUser = ensureLoggedInUserInContacts(contacts);
  let sortedContacts = sortContactsByLoggedInUserFirst(withLoggedInUser);
    for (const contact of sortedContacts) {
      let name = contact.firstname + " " + contact.lastname;
      let assignedColor = getAvatarColorClass(name);
      if (username === name) {
      allMembersRef.innerHTML += getContactListLoggedInUser({...contact, name}, assignedColor);
      } else {
      allMembersRef.innerHTML += getContactList(contact, assignedColor);
      }
  }
}

/**
 * function to sort contacts if there is a logged in user
 * 
 * @param {Array<Object>} contacts - array of contact objects where we use first and last name
 * @returns {Array<Object>} - new sorted list of contacts
 */
function sortContactsByLoggedInUserFirst(contacts) {
  const username = sessionStorage.getItem("loggedInUser");

  return [...contacts].sort((a, b) => {
    const fullA = `${a.firstname} ${a.lastname}`;
    const fullB = `${b.firstname} ${b.lastname}`;

    if (fullA === username) return -1;
    if (fullB === username) return 1;
    return fullA.localeCompare(fullB);
  });
}

/**
 * function to push the temporary logged in user to the contact list
 *
 * @param {Array<Object>} contacts - contact list
 * @returns {Array<Object>} new contact list with a possible logged in user
 */
function ensureLoggedInUserInContacts(contacts) {
  let username = sessionStorage.getItem("loggedInUser");
  let isInContacts = contacts.some(
    (c) => `${c.firstname} ${c.lastname}` === username
  );
  if (!isInContacts && username) {
    let [firstname, lastname] = username.split(" ");
    return [{firstname, lastname,
        id: "currentUser_temp",
        isTemporary: true
      },...contacts
    ];
  }
  return contacts;
}

/**
 * function to load all contacts off the server and sorts them
 * 
 * @returns a sorted Array of contacts
 */
async function loadContacts() {
  let contacts = await fetchData("/contacts/");
  let contactsArray = Object.values(contacts);
  return contactsArray.sort(compare);
}

/**
 * function to mark a clicked contact as active or inactive
 * 
 * @param {string} id - id of the clicked contact
 */
function getContact(id) {
  let membersRef = document.getElementById("contact" + id);
  let inputRef = document.getElementById("checkbox" + id);
  let checkBoxImg = document.getElementById("checkBoxImg" + id);
  checkInputCheckBox(membersRef, inputRef, checkBoxImg)
  toggleAssignment(id);
  let activeUser = assignedTo.find((currentId) => currentId == id);
  if (activeUser) {
    getActiveUser(membersRef, id);
  }
  if (!activeUser) {
    getNotActiveUser(id);
  }
}

/**
 * function to filter the contact list based on the input
 * 
 * @param {string} userNameWord - input to filter
 */
function filterContactsToAssign(userNameWord) {
  clearTimeout(debounceTimeOut);
  debounceTimeOut = setTimeout(() => {
    currentUser = contactsToAssign.filter((user) => user.firstname.toLowerCase().includes(userNameWord.toLowerCase()));
    if (userNameWord.length >= 2) {
      let allMembersRef = document.getElementById("allMembers");
      allMembersRef.innerHTML = "";
      renderContactList(currentUser);
    } else if (userNameWord.length <= 2) {
      let allMembersRef = document.getElementById("allMembers");
      allMembersRef.innerHTML = "";
      initAddTask();
    }
  }, 300);
}