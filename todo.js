let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

function renderList() {}

function markTaskAsComplete(taskId) {
    const task = tasks.filter(task => {
        return task.id === taskId;  
    });

    if(task>0){
            const completeTask = task[0];
            completeTask.done=!completeTask.done; // to toggle check box to mark complet and not
            renderList();
            return;
    }
}

function deleteTask(taskId) {
    const newTasks=tasks.filter(task => {
        return task.id !== taskId;  // it will remove the task with taskId matches from array
    });

    tasks:newTasks; // as we render tasks array, we need latest array after delting task
    renderList();
}


function addTask(task) {
   if(task){
    tasks.push(task);
    renderList();
    return;
   }
   
}

function showNotification(text) {
  alert(text);
}

function handleInputKeyPress(e) {
  if (e.key === "Enter") {      // when enter key pressed trigger this

    const input = e.target.value;

    if (!input) {
      showNotification("Task cant be empty");
      return;
    }

    const task = {
      input,
      id: Date.now().toString(), // as we need reference to delete a task
      done: false,               // to store if task is complted or not
    };

    e.target.value = "";       // to clear a input text box, once submitted
    addTask(task);
  }
}

addTaskInput.addEventListener('keyup',handleInputKeyPress);
