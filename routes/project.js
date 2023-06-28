
const express = require('express');
const router = express.Router();
const { createProject, readProject, updateProject, deleteProject, listProjects } = require('../middleware/project');
const mongoose = require('mongoose');





//list projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await listProjects();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/projects/:id', async (req, res) => {
    try {
        const reProject = await readProject(req.params.id);
        res.json(reProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/projects', async (req, res) => {
    let projectData = req.body
    projectData.userId = req.session.passport.user;

    try {
        const createdProject = await createProject(projectData);
        res.json(createdProject);
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


module.exports = router;


