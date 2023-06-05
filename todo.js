const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {}

function addTask (task) {}

function showNotification(text) {
    alert(text);
}

function handleInputKeyPress(e){

    if(e.key === 'Enter'){  // when enter key pressed trigger this

        const input=e.target.value;
         
        if(!input){
            showNotification('Task cant be empty'); 
            return;
        }

        const task={
            input,
            id:Date.now().toString(),   // as we need refrence to delete 
            done:false

        }


        e.target.value='';
        addTask(task);
    }
    

}