//Query Selectors>
const body = document.querySelector("body");
const title = document.querySelector(".title");
const deleteAllBtn = document.querySelector(".deleteAllBtn");
const deleteCompletedBtn = document.querySelector(".deleteCompletedBtn");
const input_field_title = document.querySelector(".input_field_title");
const updateTask = document.querySelector("input[name='update-task']");
const saveNewTask = document.querySelector("[data-update]");
const container = document.createElement("div");

//DATA>
let data = [];

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
  completeTask.setAttribute("class", "complete");
  newTask.append(taskName, deleteTask, editTask, completeTask);
//   data.push({ taskName: taskName, completed: completeTask.textContent });
//   console.log(data);
  container.appendChild(newTask);
  body.appendChild(container);

  function deleteAll() {
    const data = [];
    container.remove();
  }
  deleteAllBtn.addEventListener("click", deleteAll);


  function isComplete() {
    completeTask.textContent = "Completed!";
    completeTask.setAttribute("class", "completed");
  }

  completeTask.addEventListener("click", isComplete);

  function deleteThisTask(e) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
  deleteTask.addEventListener("click", deleteThisTask);

  //continue here(this function is tests for now)>
  function deleteCompleted() {
      if (completeTask.textContent=="Completed!"){
        data.push(true)
    };
  if (completeTask.textContent!=="Completed!"){
      data.push(false)
  }
  //loop over data and remove true+remove the tasks div
  for(i=0;i<data.length;i++){
      if(i==true){
          data = data.slice(data[i])
      }
  }
  console.log(data);

  console.log(container);
  console.log(container.nth-appendChild(2));
//   var arr = Array.from((document.getElementsByClassName('div')))
//   const x= document.getElementsByTagName("container");
// console.log(HTMLCollection);
//   console.log(container.item(1));
  }
  deleteCompletedBtn.addEventListener("click", deleteCompleted);

  function edit(){
      
  }
}

saveNewTask.addEventListener("click", createTask);

// function deleteAll() {
//   const data = [];
//   container.remove();
// }
// deleteAllBtn.addEventListener("click", deleteAll);

// function isComplete(){
//     completeTask.textContent="Completed!";
//     completeTask.setAttribute("class", "completed");
// }
// completeTask.addEventListener("click", isComplete);
