function getAddTaskTemplate() {
  return `<header class="page-box d-noneHeader">
      <p class="header-name">Kanban Project Management Tool</p>
      <img class="headerLogo d-none" src="../assets/img/Capa 1.png" alt="" />
      <div class="profile-navbar">
        <div class="header-top-profile">
          <a href="../html/help.html"
            ><img class="help-icon" src="../assets/icons/help.png" alt=""
          /></a>
          <p id="profile" onclick="showNavbar()" class="personal-icon">G</p>
        </div>
        <div id="navbar" class="navbar d-none">
          <a class="navbarlink" href="../html/help.html">Help</a>
          <a
            class="navbarlink"
            menu-data="legal_notice"
            onclick="activateMenu(this, 'legal_notice')"
            href="../html/legal_notice.html"
            >Legal Notice</a
          >
          <a
            class="navbarlink"
            menu-data="privacy_policy"
            onclick="activateMenu(this, 'privacy_policy')"
            href="../html/privacy_policy.html"
            >Privacy Policy</a
          >
          <a class="navbarlink" href="../index.html">Log Out</a>
        </div>
      </div>
    </header>
  <div id="addTaskOverlay" class="form">
        <div class="hedalineAddTask">
          <h1 class="hedalineAddTask__headline">Add Task</h1>
          <button class="hedalineAddTask__closeBtn" onclick="closeAddTaskOverlay()">
            <img

              src="../assets/icons/close.png"
              alt="add icon mobile"
            />
          </button>
        </div>
        <div class="AddTaskContentContainer">
        <div class="typeOfTask">
          <div class="column mb12">
            <span class=" ">Title<mark>*</mark></span>
            <input
              class="inputTitle"
              onfocusout="checkEmptyTitle()"
              type="text"
              name="title"
              id="title"
              placeholder="Enter a title"
              required
            />
            <span id="errorTitle" class="opacity">This field is required</span>
          </div>

          <div class="column">
            <span class="">Description</span>
            <textarea
              name="description"
              id="description"
              class="description textareaDescription"
              placeholder="Enter a Description"
            ></textarea>
          </div>

          <div class="column">
            <span class=" ">Due Date<mark>*</mark></span>
            <input
              class="inputDate"
              onfocusout="checkEmptyDate()"
              type="date"
              name="date"
              id="date"
              required
            />
            <span id="errorDate" class="opacity">Please enter a valid date – it cannot be in the past</span>
          </div>
        </div>

        <div class="seperator"></div>

        <div class="priority">
          <div class="column">
            <span class=" ">Priority</span>
            <div class="choose">
              <div
                id="urgent"
                class="priorityBtn"
                onclick="setPriorityUrgent('urgent')"
              >
                <span>Urgent</span>
                <img
                  id="standardUrgentIcon"
                  class=""
                  src="../assets/icons/Prio alta.png"
                  alt=""
                />
                <img
                  id="activeUrgentIcon"
                  class="d-nonevip"
                  src="../assets/icons/Prio alta active.png"
                  alt=""
                />
              </div>

              <div
                id="medium"
                class="priorityBtn"
                onclick="setPriorityMedium('medium')"
              >
                <span>Medium</span>
                <img
                  id="standardMediumIcon"
                  class="d-nonevip"
                  src="../assets/icons/Prio media.png"
                  alt=""
                />
                <img
                  id="activeMediumIcon"
                  class=""
                  src="../assets/icons/Prio media active.png"
                  alt=""
                />
              </div>

              <div id="low" class="priorityBtn" onclick="setPriorityLow('low')">
                <span id="low">Low</span>
                <img
                  id="standardLowIcon"
                  class=""
                  src="../assets/icons/Prio baja.png"
                  alt=""
                />
                <img
                  id="activeLowIcon"
                  class="d-nonevip"
                  src="../assets/icons/Prio baja active.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="   ">
            <span class=" ">Assigned to</span>

            <div class="category">
              <div
                id="assigned"
                class="inputSelectContact"
                onclick="openAssignedTo()"
              >
                <input id="userNameWord" oninput="filterContactsToAssign(userNameWord.value)" class="selectContactInput" type="text" placeholder="Select Contacts To Assign">
                <img
                  id="arrow"
                  class="arrow inputStyleArrow"
                  src="../assets/icons/arrow_drop_down.png"
                  alt=""
                />
              </div>
              <ul id="allMembers" class="options">
                
              </ul>
            </div>
            <div id="assignedMembers" class="assignedMembers"></div>
          </div>

          <div class="   ">
            <span class=" ">Category<mark>*</mark></span>
            <div class="category">
              <div class="select inputFlex" id="selectCategoryField" onclick="openTaskCategory()">
                <span id="select">Select task category</span>
                <img id="arrowCategory" class="arrow" src="../assets/icons/arrow_drop_down.png" alt="">
              </div>
              <ul id="allOptions" class="options">
                <li
                  onclick="getCategory('index1')"
                  id="index1"
                  class="options__category"
                >
                  Technical Task
                </li>
                <li
                  onclick="getCategory('index2')"
                  id="index2"
                  class="options__category"
                >
                  User Story
                </li>
              </ul>
            </div>
          </div>

          <div class="columnSubTask">
            <span class=" ">Subtasks</span>
            <input
              class="inputSubTask"
              type="text"
              name="subtasks"
              id="subTaskInput"
              placeholder="Add new subtask"
              oninput="chooseSubTask('subTaskInput', 'plusIcon', 'cancelOrCheck')"
            />
            <img
              onclick="chooseSubTask('subTaskInput', 'plusIcon', 'cancelOrCheck')"
              id="plusIcon"
              class="plusIcon"
              src="../assets/icons/Subtasks-plus.png"
              alt=""
            />

            <div id="cancelOrCheck" class="cancelOrCheck d-nonevip">
              <img
                onclick="deleteTask()"
                src="../assets/icons/iconoir_cancel.png"
                alt=""
              />
              <div class="subTasksSeperator"></div>
              <img
                onclick="addTask('subTaskInput', 'subTasks', 'plusIcon', 'cancelOrCheck')"
                src="../assets/icons/Property 1=check.png"
                alt=""
              />
            </div>
          </div>

          <div id="subTasks"></div>

          <div class="markedFieldsResponsive d-none">
            <span><mark class="marked">*</mark>This field is required</span>
          </div>
        </div>
        </div>
        <div class="buttons">
          <div class="flexButtons">
            <button class="clear" onclick="closeAddTaskOverlay()">
              Cancel
              <img
                class="defaultIcon"
                src="../assets/icons/iconoir_cancel.png"
                alt=""
              />
              <img
                class="hoverIcon"
                src="../assets/icons/iconoir_cancel_hover.png"
                alt=""
              />
            </button>

            <button class="createTask" onclick="createTaskBoard(currentStatus);">
              Create Task
              <img src="../assets/icons/check.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="addTask-footer">
    
        <div
          class="sidebar-menu"
          menu-data="summary"
          onclick="activateMenu(this, 'summary')"
        >
          <a class="sidebar-text" href="../html/summary.html"
            ><img
              src="../assets/icons/Summary.png"
              class="sidebar-icon"
              alt=""
            />Summary</a
          >
        </div>
        <div
          class="sidebar-menu sidebar-menu-active"
          menu-data="board"
          onclick="activateMenu(this, 'board')"
        >
          <a class="sidebar-text" href="../html/board.html"
            ><img
              src="../assets/icons/Board.png"
              class="sidebar-icon"
              alt=""
            />Board</a
          >
        </div>
        <div
          class="sidebar-menu"
          menu-data="add_task"
          onclick="activateMenu(this, 'add_task')"
        >
          <a class="sidebar-text" href="../html/add_task.html"
            ><img
              src="../assets/icons/Add task.png"
              class="sidebar-icon"
              alt=""
            />Add Task</a
          >
        </div>
        <div
          class="sidebar-menu"
          menu-data="contacts"
          onclick="activateMenu(this, 'contacts')"
        >
          <a class="sidebar-text" href="../html/contacts.html"
            ><img
              src="../assets/icons/Contacts.png"
              class="sidebar-icon"
              alt=""
            />Contacts</a
          >
        </div>
      
      </div>
      
      `;
}

function renderOverlayTaskEdit(tasksEditRef) {
  let prio = tasksEditRef.priority.toLowerCase();

  return `
      <div class="edit_dialog_wrapper">
        <div class="edit_close_container">
          <img onclick="closeOverlay(event)" class="closeIcon" src="../assets/icons/close.png" alt="">
        </div>

      <div class="edit_dialog_scrollable">
        <div class="form_edit_task">
          <div class="form_edit_container">
            <label class="editCategoryText" for="titleEdit">Title</label>
            <input onfocusout="checkEmptyTitleEdit()" class="border_edit_active" type="text" id="titleEdit" name="titleEdit" value="${
              tasksEditRef.title
            }" required>
            <span class="opacity errorTitleEdit" id="errorTitleEdit">This field is required</span>
          </div>
          <div class="form_edit_container">
            <label class="editCategoryText" for="descriptionEdit">Description</label>
            <textarea class="border_edit_active" id="descriptionEdit" name="descriptionEdit">${
              tasksEditRef.description
            }</textarea>
          </div>
          <div class="form_edit_container">
            <label class="editCategoryText" for="dateEdit">Due Date</label>
            <input onfocusout="checkEmptyDateEdit()" class="duedate_edit border_edit_active" type="date" id="dateEdit" name="dateEdit" value="${
              tasksEditRef.date
            }" placeholder="dd/mm/yyyy" required>
            <span class="errorDateEdit opacity" id="errorDateEdit">This field is required</span>
          </div>
          
          <div class="form_edit_container">
            <p class="editCategoryText">Priority</p>
            <div class="prio_edit_container">
              ${renderPrioButton("urgent", prio)}
              ${renderPrioButton("medium", prio)}
              ${renderPrioButton("low", prio)}
            </div>
          </div>
          <div class="form_edit_container">
            <span class="editCategoryText">Assigned to</span>
              <div class="category">
                <div class="inputSelectContact">
                  <input 
                    type="text" 
                    id="contactSearchInputEdit" 
                    class="contactSearch" 
                    placeholder="Select contacts to assign"
                    onclick='openAssignedToEdit();'
                    oninput="filterEditContactList()"
                  />
                  <img onclick='openAssignedToEdit()' id="arrow" class="arrow inputStyleArrow" src="../assets/icons/arrow_drop_down.png"/>
                </div>
                <ul id="editMembers" class="options">               
                </ul>
              </div>
                <div id="assignedMembersEdit" class="assigned_members_edit">
                ${getAssignedInitialsEditIcons(
                tasksEditRef.assignedTo
              )}</div>
          </div>
          <div class="form_edit_container">
            <label class="editCategoryText" for="subTaskInputEdit">Subtasks</label>
            <div class="edit_subtask_input">  
              <input class="border_edit_active" type="text" name="subtasks" id="subTaskInputEdit" placeholder="Add new subtask"/>
              <img onclick="chooseSubTask('subTaskInputEdit', 'plusIconEdit', 'cancelOrCheckEdit')" id="plusIconEdit" class="plusIcon_edit" src="../assets/icons/Subtasks-plus.png"/>
              <div id="cancelOrCheckEdit" class="cancelOrCheckEdit d-nonevip">
                <img ="deleteTask()" src="../assets/icons/iconoir_cancel.png"/>
                <div class="subTasksSeperator"></div>
                <img onclick="addTask('subTaskInputEdit', 'subTasksEdit',  'plusIconEdit', 'cancelOrCheckEdit')" src="../assets/icons/Property 1=check.png"/>
              </div>
            </div>
            <div id="subTasksEdit" class="subtask_edit">
            ${subtasksOverlayEdit(tasksEditRef)}
            </div>
          </div>
        </div>
        </div>
          <div class="edit_okay_box">
          <button onclick="updateDataEdit(${tasksEditRef.id})" class="edit_okay"> Ok
          <img src="../assets/icons/check.png">
          </button>
          </div>
        </div>
  `;
}

function assignedLineRender(initials) {
  return `
    <div class="assigned_to_line">
      <p class="assigned_to_icon ${initials.assignedColor}">${initials.initials}</p>
      <p class="assigned_to_name">${initials.name}</p>
    </div>`;
}

function assignedIconEditRender(initials, assignedColor, id) {
  return `
      <p id="selected_name_icon_edit${id}" onclick="openAssignedToEdit()" class="initials_icon_edit assigned_to_icon ${assignedColor}">${initials}</p>`;
}

function subtasksOverlayRender(taskRef) {
  return `
    <div class="subtask_container">
      ${taskRef.subTasksOpen
        .map(
          (subtask, i) => `
        <div class="subtask_toggle">
          <img class="subtask-icon" src="../assets/icons/subtask-unchecked.png" onclick="toggleSubtask(this, ${taskRef.id}, 'subtask-open-${taskRef.id}-${i}')">
          <p id="subtask-open-${taskRef.id}-${i}" class="cursor_overlay_task">${subtask}</p>
        </div>
      `
        )
        .join("")}
    </div>
    ${taskRef.subTasksClosed && taskRef.subTasksClosed.length
      ? `
        <div class="subtask_container">
          ${taskRef.subTasksClosed
            .map(
              (subtask, i) => `
              <div class="subtask_toggle">
                <img class="subtask-icon" src="../assets/icons/subtask-checked.png" onclick="toggleSubtask(this, ${taskRef.id}, 'subtask-closed-${taskRef.id}-${i}')">
                <p id="subtask-closed-${taskRef.id}-${i}" class="cursor_overlay_task">${subtask}</p>
              </div>
            `
            )
            .join("")}
        </div>
      `
      : ""}
  `;
}

function subtasksOverlayRenderEdit(tasksEditRef) {
  return `
    <div class="subtask_container">
      ${tasksEditRef.subTasksOpen
        .map(
          (subtask, i) => `
        <ul class="subtask_list_edit"  id="Subtask${subtask}-${i}">
          <li>
            <div onclick="editSubtask(this, ${i})" class="flex_edit">
              <p>${subtask}</p>
              <div class="hide_edit_subtask">
                <img onclick="editSubtask(this, ${i})" class="edit_icons" src="../assets/icons/edit.png">
                <div class="seperator_edit"></div>
                <img onclick="completeDeleteTask('Subtask${subtask}-${i}')" class="edit_icons" src="../assets/icons/delete.png">
              </div>
            </div>
          </li>
        </ul>
      `)
        .join("")}
    </div>
    ${tasksEditRef.subTasksClosed && tasksEditRef.subTasksClosed.length
      ? `
        <div class="subtask_container">
          ${tasksEditRef.subTasksClosed
            .map(
              (subtask, i) => `
              <div class="subtask_toggle">
                <img class="subtask-icon" src="../assets/icons/subtask-checked.png" onclick="toggleSubtask(this, ${tasksEditRef.id}, 'subtask-closed-${tasksEditRef.id}-${i}')">
                <p id="subtask-closed-${tasksEditRef.id}-${i}" class="cursor_overlay_task">${subtask}</p>
              </div>
            `
            )
            .join("")}
        </div>` :""}
    
  `;
}

function renderOverlayTaskContent(tasksRef) {
  return `
          <div class="flex_between">
            <div class="filledContainer__category">
              <p class="cursor_overlay_task overlay_task_${tasksRef.category.replaceAll(' ', '_')}">${tasksRef.category}</p>
            </div>
              <img onclick="closeOverlay(event); loadTasks();" class="closeIcon" src="../assets/icons/close.png" alt="">
          </div>
            <div class="filledContainer__title">
              <h1 class="cursor_overlay_task">${tasksRef.title}</h1>
            </div>
            <div class="filledContainer__description">
              <p class="cursor_overlay_task overlay_text_black">${
                tasksRef.description
              }</p>
            </div>
            <div class="filledContainer__dueDate flex_gap25">
              <p class="cursor_overlay_task">Due Date:</p>
              <p class="cursor_overlay_task">${formatDateToDisplay(tasksRef.date)}</p>
            </div>
            <div class="filledContainer__priority flex_gap25">
              <p class="cursor_overlay_task">Priority: </p>
              <div class="flex_gap10">
                <p class="cursor_overlay_task">${
                  tasksRef.priority.charAt(0).toUpperCase() +
                  tasksRef.priority.slice(1).toLowerCase()
                }</p>
                <img class="prio_overlay_task" src="../assets/icons/priority-${
                  tasksRef.priority
                }.png" alt="${tasksRef.priority} priority icon">
              </div>
            </div>
            <div class="filledContainer__assignedTo flex_column_overlayTask">
              <p class="cursor_overlay_task">Assigned to:</p>
              <div class="assigned_to_container">${getAssignedInitials(
                tasksRef.assignedTo
              )}</div>
            </div>
            <div class="filledContainer__subTasks flex_column_overlayTask">
              <p class="cursor_overlay_task">Subtasks:</p>
                <div class="flex_column_overlayTask_subtask">
                ${subtasksOverlayRender(tasksRef)}
                </div>
            </div>
            <div class="flex_end_gp8">
              <div onclick="deleteBoardTasks('${tasksRef.id}'); closeOverlay(event);" class="bottom_overlay_task delete_task">
                <img src="../assets/icons/Property 1=delete.png">
                <p>Delete</p>
              </div>
              <div class="seperator_overlay_task"></div>
              <div onclick='event.stopPropagation(); editOverlayTask("${tasksRef.id}"); initEditContacts(${JSON.stringify(tasksRef.assignedTo)}); disableScroll();' class="bottom_overlay_task edit_task">
                <img src="../assets/icons/Property 1=edit.png">
                <p>Edit</p>
              </div>
            </div>
  `;
}

function getTaskTemplate(element) {
  return `<div id="${element["id"]}"  class="filledContainer" draggable = "true" ondragstart="startDragging(${element["id"]})">
              <div class="filledContainer__category">
                <p onclick="overlayTask(${element["id"]})" class="filledContainer__category__text filledContainer__category__text--bg${element.category.replaceAll(' ', '_')}">${element.category}</p>
                <details class="filledContainer__details">
                  <summary class="summary__text">Category</summary>
                  <div class="summary__buttons">
                  <button class="summary__buttons__button" onclick="startDragging(${element["id"]}); moveTo('To do')">To Do</button>
                  <button class="summary__buttons__button" onclick="startDragging(${element["id"]}); moveTo('In progress')">In progress</button>
                  <button class="summary__buttons__button" onclick="startDragging(${element["id"]}); moveTo('Await feedback')">Await feedback</button>
                  <button class="summary__buttons__button" onclick="startDragging(${element["id"]}); moveTo('Done')">Done</button>
                  </div>
                </details>
              </div>
              <div class="clickableBox" onclick="overlayTask(${element["id"]})">
                <div class="filledContainer__title">
                  <p>${element.title}</p>
                </div>
                <div class="filledContainer__description">
                  <p>${element.description}</p>
                </div>
                <div id="filledContainer-status${element["id"]}" class="filledContainer__status">
                  <div
                    class="statusLine"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      id="status-bar-js${element["id"]}"
                      class="progress-bar"
                    ></div>
                  </div>
                  <p id="status-bar-number1${element["id"]}">1</p>/<p id="status-bar-number2${element["id"]}">3</p> <p>Subtasks</p>
                </div>
                <div class="taskInfo">
                  <div id="assignedTo" class="assignedTo">
                      ${renderAssignedTo(element.assignedTo)}
                  </div>

                  <div class="priority">
                    <img class="prio_overlay_task" src="../assets/icons/priority-${
                  element.priority}.png" alt="${element.priority} priority icon">
                  </div>
                </div>
              </div>
            </div>
            
            `;
}

function getEmptyTemplate() {
  return `
   <div class="emptyContainer">
              <p class="emptyContainer__text">No Tasks To do</p>
              <p></p>
            </div>
  `;
}

function prioButtonTemplate(prioFullName, prioGet, isActive, iconPath, iconPathClicked) {
  return `
    <button 
      class="prio_edit_button ${prioGet} ${isActive ? "active" : ""}" 
      data-prio="${prioGet}" 
      type="button"
      onclick="setPrioActive(this)">
      ${prioFullName} <img class="prio_overlay_task" src="${isActive ? iconPathClicked : iconPath}">
    </button>
  `;
}

function saveSubtaskTemplate(newValue, id){
  return `<li class="subTaskAdded">
        <div class="flex_edit">
          <p>${newValue}</p>
          <div class="hide_edit_subtask">
            <img onclick="editSubtask(this)" class="edit_icons" src="../assets/icons/edit.png">
            <div class="seperator_edit"></div>
            <img onclick="completeDeleteTask('Subtask${newValue}-${id}')" class="edit_icons" src="../assets/icons/delete.png">
          </div>
        </div>
      </li>`
}

function renderUnassigned(){
  return `<div>Currently unassigned</div>`;
}

function assignedMembersTemplate(colorClass, leftOffset, initials){
  return `
        <div class="assigned ${colorClass}" style="position:absolute; left: ${leftOffset}px">
          ${initials
            .split("")
            .map((letter) => `<span>${letter}</span>`)
            .join("")}
        </div>`;
}

function plusMembers(leftOffset, extraCount){
  return `
      <div class="assigned more" style="position:absolute; left: ${leftOffset}px">
        +${extraCount}
      </div>`;
}

function getEditSubtaskContainer(currentText, id) {
  return `
      <input type="text" value="${currentText}" class="subtask_input_edit noBorder">
      <div class="edit_subtask_checkbox">
        <img class="edit_icons edit_icons_subtask_change" src="../assets/icons/check-subtask.png" onclick="saveSubtask(this, '${id}')">
        <div class="seperator_edit"></div>
        <img onclick="completeDeleteTask('edit-subtask-${id}')" class="edit_icons edit_icons_subtask_change" src="../assets/icons/delete.png">
      </div>
    `;
}

function getContactListEdit(contact, assignedColor, isAssigned) {
  return `  <li
                    onclick="getContactEdit('${contact.id}')"
                    id="contactEdit${contact.id}"
                    class="optionsCategory inputFlex ${
                      isAssigned ? "assignedBg" : ""
                    }">
                    <div class="contacts_name_icon">
                      <p class="assigned_to_icon ${assignedColor}">${contact.firstname
    .toUpperCase()
    .charAt(0)}${contact.lastname.toUpperCase().charAt(0)}</p>
                      ${contact.firstname + " "} ${contact.lastname}
                    </div>
                    <input id="checkboxEdit${
                      contact.id
                    }" type="checkbox" class="checkBox" ${
    isAssigned ? "checked" : ""
  } />
                    <img
                      onclick="getContactEdit('${contact.id}', event)"
                      id="checkBoxImgEdit${contact.id}"
                      class="checkBoxImg ${isAssigned ? "filterChecked" : ""}"
                      src="${
                        isAssigned
                          ? "../assets/icons/Check button true.png"
                          : "../assets/icons/Check button.png"
                      }"
                      alt=""
                    />
                  </li>
    `;
}