const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', handleAddTask);

function handleAddTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function createTaskItem(text) {
    const listItem = document.createElement('li');

    const leftContainer = document.createElement('div');
    leftContainer.className = 'task-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed', checkbox.checked);
    });

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.type = 'button';
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(leftContainer);
    listItem.appendChild(deleteButton);

    return listItem;
}