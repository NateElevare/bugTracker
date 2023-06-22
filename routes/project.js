
const express = require('express');
const router = express.Router();
const { createProject, readProject, updateProject, deleteProject } = require('../middleware/project');


// router.use('/projects',
//     user.require)

// router.use('/projects/:id', 
//     readProject)

// router.post('/projects,',
//     projects.create)


//list projects
router.get('/projects', (req, res, next) => {
    //todo list projects
    res.send("This route is to list projects.");
})

router.get('/projects/:id', (req, res, next) => {
    //todo return one project by id
    res.send('This is to get one project by id.');
})

router.post('/projects', (req, res, next) => {
    
    res.send('This is to create project');
})

router.put('/projects/:id', (req, res, next) => {
    //todo update project by id
    res.send('This is to update project by id.');
})

router.delete('/projects/:id', (req, res, next) => {
    //todo delete project by id
    res.send('This is delete in project.js');
})


module.exports = router;


