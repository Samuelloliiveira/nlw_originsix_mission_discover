const express = require('express')
//importando o QuestionController
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

// render serve para renderizar
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

//formato que o form do modal passa as informações: route.post('/room/:room/:question/:action')
//senha não é passada na url, pegamos de outra forma

/**Estamos passando o nosso QuestionController para as rota
 * indiretamente ele está recebendo req e res */
route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route