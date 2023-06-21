
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('This is GET in home.js');
})


module.exports = router;


