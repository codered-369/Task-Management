document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    let editTaskElement = null;

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;

        if (editTaskElement) {
            editTaskElement.querySelector('.card-header-title').innerText = title;
            editTaskElement.querySelector('.card-content .content p').innerText = description;
            editTaskElement.querySelector('.card-content .content p strong').innerText = `Due Date: ${dueDate}`;
            editTaskElement = null;
        } else {
            const task = document.createElement('div');
            task.classList.add('column', 'is-one-third');
            task.innerHTML = `
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">${title}</p>
                        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p>${description}</p>
                            <p><strong>Due Date:</strong> ${dueDate}</p>
                        </div>
                        <button class="edit-btn"><i class="fas fa-edit"></i> Edit</button>
                    </div>
                </div>
            `;
            taskList.appendChild(task);

            task.querySelector('.delete-btn').addEventListener('click', () => {
                task.remove();
            });

            task.querySelector('.edit-btn').addEventListener('click', () => {
                document.getElementById('title').value = title;
                document.getElementById('description').value = description;
                document.getElementById('dueDate').value = dueDate;
                editTaskElement = task;
            });
        }

        taskForm.reset();
    });
});
