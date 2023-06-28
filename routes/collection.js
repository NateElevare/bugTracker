
const express = require('express');
const router = express.Router();
const { createCollection, readCollection, updateCollection, deleteCollection, listCollection, deleteAllCollections } = require('../middleware/collection');


router.post('/collections', async (req, res) => {
    try {
        const createdCollection = await createCollection(req.body);
        res.json(createdCollection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/collections', async (req, res) => {
    try {
        const collections = await listCollection();
        res.status(200).json(collections)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/collections/:id', async (req, res) => {
    try {
        const reCollection = await readCollection(req.params.id);
        res.json(reCollection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/collections/:id', async (req, res) => {
    try {
        const updatedCollection = await updateCollection(req.params.id, req.body);
        res.json(updatedCollection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/collections/:id', async (req, res, next) => {
    try {
        const deletedColleciton = await deleteCollection(req.params.id);
        res.json(deletedColleciton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/collections', async (req, res, next) => {
    try {
        const deletedCollecitons = await deleteAllCollections();
        res.json(deletedCollecitons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;
