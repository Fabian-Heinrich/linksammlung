const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const Link = require('./models/link.js')
const Category = require('./models/category.js')


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: '../.env'});
}

const app = express()

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.API_PORT, () => {
    console.log("Listening on " + process.env.API_PORT)
})

app.get('/', (req, res) => {
    res.send("API")
})


mongoose.connect(process.env.DATABASE_URL, {dbName: process.env.DATABASE_NAME}).then(client => {
        console.log("Mongoose connected")

        app.post('/link', (req, res) => {
            const newLink = new Link({
                url: req.body.url,
                label: req.body.label,
                description: req.body.description,
                category_ids: req.body.category_ids
            })

            newLink.save()
            res.redirect('http://localhost:3000')
        })

        app.get('/links', (req, res) => {
                Link.aggregate([{
                    $lookup: {
                        from: 'categories',
                        localField: 'category_ids',
                        foreignField: '_id',
                        as: 'categories'
                    }
                }]).then(links => {
                        res.send(links)
                    }
                ).catch(error => console.error(error))
            }
        )

        app.get('/categories', (rey, res) => {
            Category.find().then(results => {
                    res.send(results)
                }
            ).catch(error => console.log(error))
        })

    }
).catch(error => console.error(error))

