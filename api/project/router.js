// build your `/api/projects` router here

const express = require('express');
const router = express.Router();

const Project = require('./model.js');

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
                res.status(200).json(projects.map(project => ({...project, project_completed: !!project.project_completed})));
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            res.status(201).json({...project, project_completed: !!project.project_completed});
        })
        .catch(next);
});

module.exports = router;