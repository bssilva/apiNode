const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// //Carrega a model
// const Costumer = require('./models/costumer')

// //Carrega as rotas
// const indexRoute = require('./routes/index-route')
// const costumerRoute = require('./routes/costumer-route')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/', indexRoute)
// app.use('/costumer', costumerRoute)

module.exports = app;
