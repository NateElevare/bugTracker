
const express = require('express');
const router = express.Router();

router.get('/collection', (req, res, next) => {
    res.send('This is get in collection.js');
})

router.post('/collection', (req, res, next) => {
    res.send('This is post in collection.js');
})

router.put('/collection', (req, res, next) => {
    res.send('This is put in collection.js');
})

router.delete('/collection', (req, res, next) => {
    res.send('This is delete in collection.js');
})


module.exports = router;


