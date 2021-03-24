const express = require('express')
const app = require('../config/server')
const bodyParser = require('body-parser')
const routes = require('../routes/routes')
const port = 7171
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(cors)

app.listen(port, () => {
    console.log("API online na porta "+port)
})