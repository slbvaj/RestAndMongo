require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongooseArgs = {  useNewUrlParser: true, 
                        useUnifiedTopology: true}
console.log('DATABASE_URL: '+ process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, mongooseArgs)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter) //localhost:3000/subscribers

app.listen(3000, () => console.log('Server Started'))