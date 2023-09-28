const express = require('express')
var bodyParser = require('body-parser')
// var User=require('./model/user')
require('./model')
// var Contacts=require('./model/contact')
// const sequelize = require('./model')

const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})
// one by one create
// User.sync({force:true})
// Contacts.sync({force:true})
// User.drop();
// Contacts.drop();
//  all models are created
// sequelize.sync({force:false});

app.listen(3000,()=>{
    console.log("App will run on:3000")
})