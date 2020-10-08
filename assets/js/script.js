var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click" , createTaskHandler); {
    var listItemEl = document.createElement ("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task." ;
    tasksToDoEl.appendChild(listItemEl);
};

// basically created a new task item, styled the new task item , added txt and appended this element to the task list
var createTaskHandler= function () {
    var listItemEl = document.createElement("li");
    listItemEl.className="task-item";
    listItemEl.textContent =" This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}
