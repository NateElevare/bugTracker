const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const port = config.port;
const password = encodeURIComponent("Ph8bJE4zmOJqx3OA");
const URI = 'mongodb+srv://nate:Ph8bJE4zmOJqx3OA@cluster0.g2mze.mongodb.net/?retryWrites=true&w=majority';
const cors = require("cors")
const passport = require('./config/passport');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const app = express();
const payload = require("./middleware/payload");
const isAuthorized = require('./middleware/auth');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser('cownow'));

app.use(cors({credentials: true, origin: 'http://localhost:5000'}));



app.use(session({
    secret: 'cownow',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false,
        maxAge: 1000 * 60 * 60 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(require('./routes/Auth'))
app.use(isAuthorized)
app.use(require('./routes/user'))
app.use(require('./routes/stage'))
app.use(require('./routes/bug'))
app.use(require('./routes/collection'))
app.use(require('./routes/project'))
app.use(require('./routes/task'))
app.use(require('./routes/punch'))
//app.use(require('./routes/timeCard'))
app.use(payload)


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
})

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })



app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Cache-Control, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    if ("OPTIONS" === req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  });

app.listen(port, () => {
    console.log('Server running on port: ' + port);
})
 