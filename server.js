const express = require('express');
//const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const config = require('./config/config');
const app = express();
const port = config.port;
const password = encodeURIComponent("Ph8bJE4zmOJqx3OA");
const URI = 'mongodb+srv://nate:Ph8bJE4zmOJqx3OA@cluster0.g2mze.mongodb.net/?retryWrites=true&w=majority';


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
})

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(URI, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

// async function connectToMongoDB() {
// try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
// } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
// }
// }
// connectToMongoDB().catch(console.dir);


    
//function that connects to the database
// async function connectToMongoDB() {
//     const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         // Make the appropriate DB calls
//         //await listDatabases(client);
//         const databasesList = await client.db().admin().listDatabases();
//         console.log("Databases:");
//         databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// connectToMongoDB().catch(console.error);

const home = require('./routes/home');
const stage = require('./routes/stage');
const auth = require('./routes/Auth');
const bug = require('./routes/bug');
const collection = require('./routes/collection');
const projects = require('./routes/project');
const task = require('./routes/task'); 
const timeCard = require('./routes/timeCard');
const user = require('./routes/user');


app.use(home)
app.use(stage)
app.use(auth)
app.use(bug)
app.use(collection)
app.use(projects)
app.use(task)
app.use(timeCard)
app.use(user)



// app.use(cors())
// app.use(function (req, res, next) {nod
//     res.header(
//       "Access-Control-Allow-Methods",
//       "PUT, GET, POST, DELETE, OPTIONS"
//     );
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Access-Control-Allow-Headers, Cache-Control, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
//     );
//     res.header("Access-Control-Allow-Credentials", "true");
//     if ("OPTIONS" === req.method) {
//       res.sendStatus(200);
//     } else {
//       next();
//     }
//   });
//   app.use(bodyParser.json({ limit: "50mb" }));
//   app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//   app.use(
//     session({
//       secret: config.server.secret,
//       cookie: {
//         maxAge: 1000 * 60 * 60 * 30, //,
//         //secure: secure
//       },
//       domain: "http://localhost:3001",
//       resave: false,
//       saveUninitialized: false,
//       rolling: true,
//       //httpOnly: !secure,
//       store: sessionStore,
//     })
//   );



app.listen(port, () => {
    console.log('Server running on port: ' + port);
})
 