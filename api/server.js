const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: '../.env'});
}

const app = express()

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.API_PORT, () => {
    console.log("Listening on 3001")
})

app.get('/', (req, res) => {
    res.send("API")
})

MongoClient.connect(process.env.DATABASE_URL).then(client => {
    console.log('Connected to DB')
    const db = client.db(process.env.DATABASE_NAME)
    const linkCollection = db.collection('links')

    app.post('/link', (req, res) => {
        linkCollection.insertOne(req.body).then(result => {
                res.redirect('/')
            }
        ).catch(error => console.error(error))
    })

    app.get('/links', (req, res) => {
            db.collection('links').aggregate([{
                $lookup: {
                    from: 'categories',
                    localField: 'category_ids',
                    foreignField: '_id',
                    as: 'categories'
                }
            }]).toArray().then(result => {
                res.send(result)
            })
        }
    )

    app.get('/categories', (rey, res) => {
        db.collection('categories').find().toArray().then(results => {
                res.send(results)
            }
        )
    })
}).catch(error => console.error(error))


