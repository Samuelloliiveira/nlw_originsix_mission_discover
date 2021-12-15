const express = require('express')
const routes = require('./routes')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

//avisando ao express que estamos usando de forma estatica a pasta public
server.use(express.static('public'))

// path esta pegando o caminho da pasta views
server.set('views', path.join(__dirname, 'views'))

server.use(routes)

// criando uma porta
server.listen(3000, () => console.log('Rodando...'))