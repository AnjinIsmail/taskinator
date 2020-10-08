var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// basically created a new task item, styled the new task item , added txt and appended this element to the task list
var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div to hold task infor and add to listitem
  var taskInfoEl = document.createElement("div");
  //give it a class name
  taskInfoEl.className = "task-info";

  //add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class= 'task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";

  listItemEl.appendChild(taskInfoEl);
  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
{
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
//   listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
}
