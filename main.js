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
  listItem.innerHTML = `<input type='checkbox' style="height: 20px; width: 20px;" onchange="moveCompletedTask(this)"/>
  ${taskValue}
  <i class="fa fa-trash-alt" style="cursor: pointer;"></i>`;

  taskList.appendChild(listItem);
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.marginBottom = "10px";
  listItem.style.fontSize = "18px";
  listItem.style.textTransform = "capitalize";

  taskInput.value = "";
}

// move pending task to completed task

function moveCompletedTask(checkbox) {
  const taskValue = checkbox.nextSibling.textContent;
  const completedTasks = document.getElementById("completed-task");
  const listItem = document.createElement("li");
  listItem.innerHTML = taskValue;
  completedTasks.appendChild(listItem);

  const pendingTasks = document.getElementById("pending-task");
  pendingTasks.removeChild(checkbox.parentElement);

}


