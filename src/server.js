const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use('/api', routes)

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
app.listen(port)