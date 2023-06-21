
const express = require('express');
const router = express.Router();

router.get('/task', (req, res, next) => {
    res.send('This is get in task.js');
})

router.post('/task', (req, res, next) => {
    res.send('This is post in task.js');
})

router.put('/task', (req, res, next) => {
    res.send('This is put in task.js');
})

router.delete('/task', (req, res, next) => {
    res.send('This is delete in task.js');
})


module.exports = router;


