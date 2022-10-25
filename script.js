let input = document.getElementById("task-input");
let addTask = document.getElementById("add-task");
let addedTask = document.getElementById("task-added");

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value != "") {
    console.log(input.value);
    input.value = "";

    let task = document.createElement("li");
    addedTask.appendChild(task);
    
  } else {
    alert("please enter your task");
  }
});
