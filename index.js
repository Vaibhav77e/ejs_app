const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');

// set up env file
dotenv.config({path:'config.env'});

// import database details
const database = require('./database/database');


app.use(express.json());

// configure database
database();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})