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

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);

};

// buttonEl.addEventListener("click", createTaskHandler);
// 因为我们的目标是整个form而不是button，所以我们不能再使用click event listener

formEl.addEventListener("submit", createTaskHandler);
