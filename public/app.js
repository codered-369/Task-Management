const apiUrl = 'http://localhost:5000/api/tasks';

async function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, dueDate }),
    });
    const task = await response.json();
    displayTasks();
}

async function displayTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        taskItem.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <strong>${task.title}</strong><br>
          ${task.description}<br>
          <small>Due: ${task.dueDate}</small>
        </div>
        <div>
          <button class="btn btn-secondary btn-sm" onclick="editTask(${task.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
        </div>
      </div>
    `;
        taskList.appendChild(taskItem);
    });
}

async function editTask(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    const task = await response.json();

    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('dueDate').value = task.dueDate;

    await deleteTask(id);
}

async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    displayTasks();
}

displayTasks();
