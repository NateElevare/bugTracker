const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    { usernameField: 'email' }, // if it's 'username' in your model, replace 'email' with 'username'
    (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if (err) { 
                return done(err); 
            }
            if (!user) { 
                return done(null, false, { message: 'Incorrect username.' }); 
            }
            if (!user.validPassword(password)) { // 'validPassword' should be a method in your User model that checks if the hashed password matches
                return done(null, false, { message: 'Incorrect password.' }); 
            }
            return done(null, user);
        });
    }
));
