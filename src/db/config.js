//CONFIGURANDO BANCO DE DADOS SQLITE

//importando os modulos sqlite
const sqlite3 = require('sqlite3')
//desestruturando e pegando só o necessário para o projeto
const { open } = require('sqlite')//open abri a conexão com o bd

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',//caminho + nome do bd
        driver: sqlite3.Database, //driver comanda o bd
    })