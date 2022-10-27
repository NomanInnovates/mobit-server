const express = require('express');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes');
const dbConnection = require('./config/dbConnect');
const app = express()

require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


dbConnection();


app.use('/user',userRoutes)

app.post('/newReq', (req, res)=>{
     console.log("body erhere", req.body)
     res.send({message:'message' })
})

app.listen('3001',()=>{
     console.log('localhost:3001')
})