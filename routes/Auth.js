
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user'); 

router.get('/auth', (req, res, next) => {
    res.send('This is get in auth.js');
})

router.post('/login', passport.authenticate('local', {
    failureFlash: true
}), async (req, res) => {
    const userProjects = await User.findById(req.user._id).populate('projectIds').exec();
    res.status(200).send(userProjects);

});


router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.send(err);
        }

    });
    res.clearCookie('connect.sid');
    res.status(200).send('You are logged out');
});

router.post('/register', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    user.save().then((user) => {
        return res.status(200).send(user);
    }).catch((err) => {
        return res.status(400).send(err.message);
    });
});


module.exports = router;


