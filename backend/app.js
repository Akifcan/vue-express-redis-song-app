const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api/', router)

app.listen(3000, () => console.log('Working on 3000'))