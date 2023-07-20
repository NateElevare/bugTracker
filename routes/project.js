
const express = require('express');
const router = express.Router();
const { createProject, readProject, updateProject, deleteProject, listProjects, deleteAllProjects } = require('../middleware/project');
const { updateUser } = require('../middleware/user');
const mongoose = require('mongoose');



//Create Project
router.post('/projects', async (req, res) => {
    let projectData = req.body
    projectData.owner = req.session.passport.user;

    try {
        const createdProject = await createProject(projectData);
        await updateUser(req.session.passport.user, { $push: { projectIds: createdProject._id } });
        res.status(200).json(createdProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//list projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await listProjects();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
//List one project
router.get('/projects/:id', async (req, res) => {
    try {
        const reProject = await readProject(req.params.id);
        res.json(reProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.put('/projects/:id', async (req, res) => {
    try {
        const updatedProject = await updateProject(req.params.id, req.body);
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/projects/:id', async (req, res, next) => {
    try {
        const deletedProject = await deleteProject(req.params.id);
        res.json(deletedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/projects', async (req, res, next) => {
    try {
        const deletedProjects = await deleteAllProjects();
        res.json(deletedProjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})




module.exports = router;


