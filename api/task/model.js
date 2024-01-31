// build your `Task` model here

const db = require('../../data/dbConfig.js');

function getTasks() {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description');
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);
    return db('tasks').where('task_id', task_id).first();
}

module.exports = {
    getTasks,
    createTask,
}