const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routesUrls = require('../routes/routes')

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Connect to database"))

app.use(express.json())
app.use(cors())
app.use('/', routesUrls)


app.listen(4000, () => console.log('Server is running'))