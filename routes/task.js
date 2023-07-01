
const express = require('express');
const router = express.Router();
const { createTask, readTask, updateTask, deleteTask, listTask, deleteAllTasks } = require('../middleware/task');
const Stage = require('../models/stage');
const { updateStage } = require('../middleware/stage');


router.post('/tasks', async (req, res) => {
    let taskData = req.body
    taskData.userId = req.session.passport.user;
    try {
        const createdTask = await createTask(taskData);
        await updateStage(req.body.stageId, { $push: { taskIds: createdTask._id } });
        res.json(createdTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await listTask();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const reTask = await readTask(req.params.id);
        res.json(reTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await updateTask(req.params.id, req.body);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/tasks/:id', async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const deletedColleciton = await deleteTask(req.params.id);
        await Stage.findByIdAndDelete(taskId,{ $pull: {taskIds: taskId}}, { new: true});
        res.json(deletedColleciton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/tasks', async (req, res, next) => {
    try {
 
        const deletedCollecitons = await deleteAllTasks();
        await Stage.findByIdAndUpdate(taskId,{ $set: {taskIds: []}}, { new: true});
        res.json(deletedCollecitons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;


