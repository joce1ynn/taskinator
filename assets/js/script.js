// console.dir(window.document);
// displays the HTML element as an object, a DOM element

// var buttonEl = document.querySelector("#save-task");
// console.log(buttonEl);

// buttonEl.addEventListener("click", function(){
//     alert("button clicked");
// });

// document.createElement("li");
// 创建一个 DOM 元素对象

// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// taskItemEl;

// var taskToDoEl = document.querySelector("#tasks-to-do");
// taskToDoEl;

// taskToDoEl.appendChild(taskItemEl);
// taskItemEl.className = "task-item"; // assign same class name;

// var buttonEl = document.querySelector("#save-task");

// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });

// var createTaskHandler = function (event) {
//   event.preventDefault();

//   var taskNameInput = document.querySelector("input[name='task-name']").value;
//   // console.dir(taskNameInput);
//   var taskTypeInput = document.querySelector("select[name='task-type']").value;
//   // .value只选择他的值

//   // create list item
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";

//   // create div to hold task info and add to list item
//   var taskInfoEl = document.createElement("div");
//   // give it a class name
//   taskInfoEl.className = "task-info";

//   // add HTML content to div
//   taskInfoEl.innerHTML =
//     '<h3 class="task-name">' +
//     taskNameInput +
//     "</h3><span class='task-type'>" +
//     taskTypeInput +
//     "</span>";
//   listItemEl.appendChild(taskInfoEl);

//   // add entire list item to list
//   tasksToDoEl.appendChild(listItemEl);
// };

// buttonEl.addEventListener("click", createTaskHandler);
// 因为我们的目标是整个form而不是button，所以我们不能再使用click event listener

var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty strings
  // the ! is used to check for the false value.
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  listItemEl.appendChild(taskInfoEl);

  // create task actions (buttons and select) for task
  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};

var createTaskActions = function (taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

  // create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(editButtonEl);

  // create delete button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(deleteButtonEl);

  // create change status dropdown
  var statusSelectEl = document.createElement("select");
  statusSelectEl.textContent = "select-status";
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(statusSelectEl);

  // create status options
  var statusChoices = ["To Do", "In Progress", "Completed"];

  for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  // 验证它是否返回了正确的数据
  return actionContainerEl;
};

formEl.addEventListener("submit", taskFormHandler);
