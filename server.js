const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const task = { id: Date.now(), ...req.body };
    /* codered-369 */
    tasks.push(task);
    res.json(task);
});

app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.map(task => task.id == id ? { ...task, ...req.body } : task);
    res.json(tasks.find(task => task.id == id));
});

app.delete('/api/tasks/:id', (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id);
    res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
