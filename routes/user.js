
const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
    res.send('This is get in user.js');
})

router.post('/user', (req, res, next) => {
    res.send('This is post in user.js');
})

router.put('/user', (req, res, next) => {
    res.send('This is put in user.js');
})

router.delete('/user', (req, res, next) => {
    res.send('This is delete in user.js');
})


module.exports = router;


