const express = require('express')
//const bodyParser = require('body-parser')
const routes = require('./src/routes')

const app = express()

app.use(routes)

app.listen(3005)