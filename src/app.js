const express = require('express')
const app = require('../config/server')
const bodyParser = require('body-parser')
const routes = require('../routes/routes')
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(cors)

app.listen(process.env.PORT || 3000)