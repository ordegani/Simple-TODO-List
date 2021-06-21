//Query Selectors>
const body = document.querySelector("body");
const title = document.querySelector(".title");
const deleteAllBtn = document.querySelector(".deleteAllBtn");
const deleteCompletedBtn = document.querySelector(".deleteCompletedBtn");
const input_field_title = document.querySelector(".input_field_title");
const updateTask = document.querySelector("input[name='update-task']");
const saveNewTask = document.querySelector("[data-update]");
const container = document.createElement("div");
container.setAttribute("class", "container");

//DATA>
let data = [];

let x="to be completed";

function createTask() {
  //add if loop to check if a task has already been added to list, and if it has been added don't add it again.
  let taskName = document.createElement("div");
  taskName.textContent = updateTask.value;
  let newTask = document.createElement("div");
  newTask.setAttribute("class", "newTask");
  const deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";
  const editTask = document.createElement("button");
  editTask.textContent = "Edit";
  const completeTask = document.createElement("button");
  completeTask.textContent = "Complete";
  completeTask.setAttribute("class", "complete");
  newTask.append(taskName, deleteTask, editTask, completeTask);
  data.push({ taskName: taskName.textContent, completed: x });
  console.log(data);
  container.appendChild(newTask);
  body.appendChild(container);

  // data.forEach((task, index) => {
  //   const taskEl = document.createElement("div");
  //   taskEl.textContent = task.taskName;
  //   container.append(taskEl);
  //   console.log(taskEl);
  // });
  console.log(data);
  // function deleteAll() {
  //   const data = [];
  //   container.remove();
  // }
  // deleteAllBtn.addEventListener("click", deleteAll);


  function isComplete() {
    completeTask.textContent = "Completed!";
    completeTask.setAttribute("class", "completed");
    localStorage.setItem("data", JSON.stringify(data));
  }

  completeTask.addEventListener("click", isComplete);

  function deleteThisTask(e) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
    localStorage.setItem("data", JSON.stringify(data));
  }
  deleteTask.addEventListener("click", deleteThisTask);


  function deleteCompleted() {
    data.forEach((i) => {
     if( completeTask.getAttribute("class")=="completed"){
       newTask.remove();
     }
  });
  localStorage.setItem("data", JSON.stringify(data));
      
  }
  deleteCompletedBtn.addEventListener("click", deleteCompleted);
  
  const editor = document.createElement("input");
  const updateTask2 = document.createElement("button");
  function edit(){
  updateTask2.textContent = "Done";
  body.append(editor);
  body.append(updateTask2);
  newTask.append(editor);
  newTask.append(updateTask2);
  editor.setAttribute("name", "update-task2");
  editor.setAttribute("type", "text");
  editor.setAttribute("placeholder", "your edit");
  updateTask2.setAttribute("name", "[data-update2]"); 
  console.log(editor);

}
  editTask.addEventListener("click", edit);




function editBtn(e){
  //change to edit existing taskName.textContent
  newTask.remove();
  let taskName2 = document.createElement("div");
  taskName2.textContent=editor.value;
  console.log((editor.value));
  const newTask2 = document.createElement("div");
  newTask2.append(taskName2, deleteTask, editTask, completeTask);
  newTask2.setAttribute("class", "newTask");
  container.append(newTask2);
  body.appendChild(container);
  data.push(newTask);
  localStorage.setItem("data", JSON.stringify(data));
}




updateTask2.addEventListener("click", editBtn);

function isComplete(e){
  //by accessing html collection
  completeTask.textContent="Completed!";
  completeTask.setAttribute("class", "completed");

  console.log(e.target.parentElement.lastChild.getAttribute("class"));

  //by accessing data array in local storage
  x="completed already";
  console.log(x);
  // console.log(data);
  // console.log( data[0]);
  // console.log(data[0].completed);
}
completeTask.addEventListener("click", isComplete);

localStorage.setItem("data", JSON.stringify(data));
}
saveNewTask.addEventListener("click", createTask);

function deleteAll() {
  //delete from localStorage √
  const data = [];
  container.remove();
  localStorage.clear();
}
deleteAllBtn.addEventListener("click", deleteAll);



//DRAFTS NOTES
  //change completed in data object to another value from "complete"

  //     if (completeTask.textContent=="Completed!"){
  //       data.completed="completed";
  //   };
  // if (completeTask.textContent!=="Completed!"){
  //     data.push(false)
  // }
  //loop over data and remove true+remove the tasks div

  // for(i=0;i<data.length;i++){
  //     if(i==true){
  //         data = data.slice(data[i])
  //     }
  // }
  // console.log(data);

  // console.log(container);
  // console.log(container.nth-appendChild(2));
  
//   var arr = Array.from((document.getElementsByClassName('div')))
//   const x= document.getElementsByTagName("container");
// console.log(HTMLCollection);
//   console.log(container.item(1));


