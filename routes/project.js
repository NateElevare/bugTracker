
const express = require('express');
const router = express.Router();
const { createProject, readProject, updateProject, deleteProject, listProjects } = require('../middleware/project');


// router.use('/projects',
//     user.require)

// router.use('/projects/:id', 
//     readProject)

// router.post('/projects,',
//     projects.create)


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
    try {
        const createdProject = await createProject(req.body);
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


