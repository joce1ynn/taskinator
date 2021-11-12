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
var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });

var createTaskHandler = function (event) {
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  // console.dir(taskNameInput);
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  // .value只选择他的值

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML =
    '<h3 class="task-name">' +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

// buttonEl.addEventListener("click", createTaskHandler);
// 因为我们的目标是整个form而不是button，所以我们不能再使用click event listener

formEl.addEventListener("submit", createTaskHandler);
