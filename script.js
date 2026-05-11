document.addEventListener("DOMContentLoaded", loadTasks);
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  document.getElementById("taskList").appendChild(li);
saveTask(taskText);
  input.value = "";
}

function toggleTask(element) {
  element.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}
function saveTask(task){

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span onclick="toggleTask(this)">${task}</span>
      <button onclick="deleteTask(this)">❌</button>
    `;

    document.getElementById("taskList").appendChild(li);
  });
}
