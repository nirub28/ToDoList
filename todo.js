let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

function addTasksToList(task) {
  const li = document.createElement("li");

  li.innerHTML = `
           <input type="checkbox" id="${task.id}" ${
    task.done ? "checked" : ""
  } class="custom-checkbox">
           <label for="${task.id}">${task.input}</label>
           <img src="https://cdn-icons-png.flaticon.com/256/1617/1617543.png" class="delete" data-id="${
             task.id
           }" />
   `;
  taskList.append(li);
}

function renderList() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    addTasksToList(tasks[i]);
  }
  tasksCounter.innerHTML = tasks.length;
}

function markTaskAsComplete(taskId) {
  const task = tasks.filter((task) => {
    return task.id == taskId;
  });

  if (task.length > 0) {
    const completeTask = task[0];
    completeTask.done = !completeTask.done; // to toggle check box to mark complet and not
    renderList();
    return;
  }
}

function deleteTask(taskId) {
  const newTasks = tasks.filter((task) => {
    return task.id !== taskId; // it will remove the task with taskId matches from array
  });

  tasks= newTasks; // as we render tasks array, we need latest array after delting task
  renderList();
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    return;
  }
}

function showNotification(text) {
  alert(text);
}

function handleInputKeyPress(e) {
  if (e.key === "Enter") {
    // when enter key pressed trigger this

    const input = e.target.value;

    if (!input) {
      showNotification("Task cant be empty");
      return;
    }

    const task = {
      input,
      id: Date.now().toString(), // as we need reference to delete a task
      done: false, // to store if task is complted or not
    };

    e.target.value = ""; // to clear a input text box, once submitted
    addTask(task);
  }
}

function handleClickEvent(e) {
  const target = e.target;

  if (target.className === "delete") {
    const taskId = target.dataset.id;
    deleteTask(taskId);
    return;
  } else if (target.className === "custom-checkbox") {
    const taskId = target.id;
    markTaskAsComplete(taskId);
    return;
  }
}

addTaskInput.addEventListener("keyup", handleInputKeyPress);
document.addEventListener("click", handleClickEvent);
