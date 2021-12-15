const express = require('express')

const route = express.Router()

// render serve para renderizar
route.get('/', (req, res) => res.render('index'))

module.exports = route