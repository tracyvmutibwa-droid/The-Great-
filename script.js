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
function checkPrayerTimes(){

  const now = new Date();

  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Fajr Reminder
  if(currentHour === 5 && currentMinute === 30){
    alert("🕌 Time for Fajr Prayer");
  }

  // Dhuhr Reminder
  if(currentHour === 13 && currentMinute === 0){
    alert("🕌 Time for Dhuhr Prayer");
  }

  // Asr Reminder
  if(currentHour === 16 && currentMinute === 30){
    alert("🕌 Time for Asr Prayer");
  }

  // Maghrib Reminder
  if(currentHour === 19 && currentMinute === 0){
    alert("🕌 Time for Maghrib Prayer");
  }

  // Isha Reminder
  if(currentHour === 20 && currentMinute === 30){
    alert("🕌 Time for Isha Prayer");
  }
}

setInterval(checkPrayerTimes, 60000);
