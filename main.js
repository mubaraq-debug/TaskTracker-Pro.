'use-strict'

// add a task
function addTask() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value;

  if (taskValue.trim() === "") {
    alert("Enter a task!!!");
    return;
  }

  const taskList = document.getElementById("pending-task");
  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskValue} <div style="display: flex; gap: 20px;"><input type='checkbox' style="height: 20px; width: 20px;" /><i class="fa fa-trash-alt" style="cursor: pointer;" onclick="deleteTask()"></i></div>`;

  taskList.appendChild(listItem);
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.marginBottom = "10px";
  listItem.style.fontSize = "18px";
  listItem.style.textTransform = "capitalize";

  taskInput.value = "";
}


// delete a task
function deleteTask(listItem) {
  listItem.remove(); // Remove the entire listItem.
}
