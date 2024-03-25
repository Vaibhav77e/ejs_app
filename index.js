const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
const path = require('path');
const staticRoute = require('./routes/static_routes');
const bodyParser = require('body-parser');
// set up env file
dotenv.config({path:'config.env'});

// import database details
const database = require('./database/database');


app.use(express.json());
app.use(express.urlencoded());
// supports form data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// import routes here
const auth = require('./routes/auth/auth_routes');

// configure database
database();


app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));

// configure routes
app.use('/api/v1',auth);
app.use('/',staticRoute);


app.get('/testContacts', (req, res) => {
  let contacts = [{
    "contactName":"Vaibhav",
    "contactNumber":"5896321489"
  },
  {
    "contactName":"Somenoe",
    "contactNumber":"1234567890"
  },
  {
    "contactName":"whaart",
    "contactNumber":"0987654321"
  },
]
  res.render("index",{contacts:contacts});
});

app.get('/testUrl',async(req, res) => {
    return res.render("home");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})