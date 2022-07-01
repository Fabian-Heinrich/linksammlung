const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: '../.env'});
}

MongoClient.connect(process.env.DATABASE_URL)


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3001, () => {

})

app.get('/', (req, res) => {
    res.send("API")
})
