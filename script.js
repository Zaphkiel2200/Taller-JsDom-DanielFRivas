const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    saveTasks();
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTaskElement(taskText);
        taskInput.value = '';
    }
});

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('.task-item')).map(item => item.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

loadTasks();