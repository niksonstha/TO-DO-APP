let input = document.getElementById("task-input");
let addTask = document.getElementById("add-task");
let addedTask = document.getElementById("task-added");

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value != "") {
    console.log(input.value);

    let task = document.createElement("li");
    addedTask.appendChild(task);

    let para = document.createElement("p");
    task.appendChild(para);
    para.innerHTML = input.value;

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "edit__delete");
    task.appendChild(buttonDiv);

    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.setAttribute("id", "edit");
    buttonDiv.appendChild(edit);

    let remove = document.createElement("button");
    remove.innerText = "Delete";
    remove.setAttribute("id", "delete");
    buttonDiv.appendChild(remove);

    input.value = "";

    remove.addEventListener("click", () => {
      addedTask.removeChild(task);
    });
  } else {
    alert("please enter your task");
  }
});
