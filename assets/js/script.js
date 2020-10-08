var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// basically created a new task item, styled the new task item , added txt and appended this element to the task list
var createTaskHandler = function (event) {
  event.preventDefault();
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task";
  tasksToDoEl.appendChild(listItemEl);
};

var taskNameInput = document.querySelector("input[name='task-name']");
console.log(taskNameInput);

formEl.addEventListener("submit", createTaskHandler);
{
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}
