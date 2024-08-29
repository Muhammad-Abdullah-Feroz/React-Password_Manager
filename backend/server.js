const express = require('express')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors")



const app = express()
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'PassOp';
const port = 3000
dotenv.config()
app.use(bodyParser.json())
app.use(cors())

// client.connect()

// Get all the passwords from Database
app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection("passwords")
    const findResult = await collection.find({}).toArray()
    res.json(findResult)
})


// Save password in the database
app.post('/', async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords")
    const result = await collection.insertOne(password);
    res.send({success:true , result:result})
    
})


// Delete password from the database
app.delete('/', async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords")
    const result = await collection.deleteOne(password);
    res.send({success:true , result:result})
    
})

app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`)
})