document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    };

    const saveTasks = () => {
        const tasks = [];
        taskList.querySelectorAll('.column').forEach(taskElement => {
            const title = taskElement.querySelector('.card-header-title').textContent;
            const description = taskElement.querySelector('.content p:nth-child(1)').textContent;
            const dueDate = taskElement.querySelector('.content p:nth-child(2)').textContent.replace('Due Date: ', '');
            tasks.push({ title, description, dueDate });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTaskToDOM = (task) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('column', 'is-one-third');
        taskElement.innerHTML = `
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">${task.title}</p>
                    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>${task.description}</p>
                        <p><strong>Due Date:</strong> ${task.dueDate}</p>
                    </div>
                    <button class="edit-btn"><i class="fas fa-edit"></i> Edit</button>
                </div>
            </div>
        `;
        taskList.appendChild(taskElement);

        taskElement.querySelector('.delete-btn').addEventListener('click', () => {
            taskElement.remove();
            saveTasks();
        });

        taskElement.querySelector('.edit-btn').addEventListener('click', () => {
            document.getElementById('title').value = task.title;
            document.getElementById('description').value = task.description;
            document.getElementById('dueDate').value = task.dueDate;

            taskElement.remove();
            saveTasks();
        });
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;

        if (!title || !description || !dueDate) {
            alert('Please fill in all fields.');
            return;
        }

        const task = { title, description, dueDate };
        addTaskToDOM(task);
        saveTasks();

        taskForm.reset();
    });

    loadTasks();
});
