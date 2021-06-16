//Query Selectors>
const body = document.querySelector("body");
const title = document.querySelector(".title");
const deleteAllBtn = document.querySelector(".deleteAllBtn");
const deleteCompletedBtn = document.querySelector(".deleteCompletedBtn");
const input_field_title = document.querySelector(".input_field_title");
const updateTask = document.querySelector("input[name='update-task']");
const saveNewTask = document.querySelector("[data-update]");

function createTask() {
  //add if loop to check if a task has already been added to list, and if it has been added don't add it again.
  const taskName = updateTask.value;
  const newTask = document.createElement("div");
  const deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";
  const editTask = document.createElement("button");
  editTask.textContent = "Edit";
  const completeTask = document.createElement("button");
  completeTask.textContent = "Complete";
  newTask.append(taskName, deleteTask, editTask, completeTask);
  body.appendChild(newTask);
}
saveNewTask.addEventListener("click", createTask);
