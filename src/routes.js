const express = require('express')

const route = express.Router()

// render serve para renderizar
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

//formato que o form do modal passa as informações
//senha não é passada na url, pegamos de outra forma
// route.post('/room/:room/:question/:action')

module.exports = route