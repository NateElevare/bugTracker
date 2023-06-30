
const express = require('express');
const router = express.Router();
const { createStage, readStage, updateStage, deleteStage, listStage, deleteAllStages } = require('../middleware/stage');


router.post('/stages', async (req, res) => {
    try {
        const createdStage = await createStage(req.body);
        res.json(createdStage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/stages', async (req, res) => {
    try {
        const stages = await listStage(req.query.collectionId);
        res.status(200).json(stages)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/stages/:id', async (req, res) => {
    try {
        const reStage = await readStage(req.params.id);
        res.json(reStage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/stages/:id', async (req, res) => {
    try {
        const updatedStage = await updateStage(req.params.id, req.body);
        res.json(updatedStage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/stages/:id', async (req, res, next) => {
    try {
        const deletedColleciton = await deleteStage(req.params.id);
        res.json(deletedColleciton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/stages', async (req, res, next) => {
    try {
        const deletedCollecitons = await deleteAllStages();
        res.json(deletedCollecitons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;

