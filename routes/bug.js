
const express = require('express');
const router = express.Router();
const { createBug, readBug, updateBug, deleteBug, listBug, deleteAllBugs } = require('../middleware/bug');


router.post('/bugs', async (req, res) => {
    try {
        const createdBug = await createBug(req.body);
        res.json(createdBug);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/bugs', async (req, res) => {
    try {
        const bugs = await listBug();
        res.status(200).json(bugs)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/bugs/:id', async (req, res) => {
    try {
        const reBug = await readBug(req.params.id);
        res.json(reBug);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/bugs/:id', async (req, res) => {
    try {
        const updatedBug = await updateBug(req.params.id, req.body);
        res.json(updatedBug);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/bugs/:id', async (req, res, next) => {
    try {
        const deletedColleciton = await deleteBug(req.params.id);
        res.json(deletedColleciton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/bugs', async (req, res, next) => {
    try {
        const deletedCollecitons = await deleteAllBugs();
        res.json(deletedCollecitons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;


