const Database = require('../db/config')

module.exports = {

    async index(req, res) {
        const db = await Database()

        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        //verificando se a senha esta correta
        //db.get só trás um dado do banco, diferente de all
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        //verificando se a senha da sala e igual a senha digitada
        if (verifyRoom.pass == password) {
            if (action == 'delete') {
                
                //apagando questão de acordo com o id
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            }else if (action == 'check') {

                //modificando questão para lida
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

            }

            res.redirect(`/room/${roomId}`)
        }else {
            res.render('passincorrect', {roomId: roomId})
        }
    },

    async create(req, res) {
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions (
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}