// build your `/api/tasks` router here

const express = require('express');
const router = express.Router();
const Task = require('./model.js');

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks.map(task => ({ ...task,
                 task_completed: !!task.task_completed })));
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(task => {
            res.status(201).json({ ...task,
                 task_completed: !!task.task_completed });
        })
        .catch(next);
});

module.exports = router;