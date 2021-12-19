const Database = require('../db/config')

module.exports = {
    async create(req, res) {

        const db = await Database()
        const pass = req.body.password

        let roomId = ''
        let isRoom = true

        while (isRoom) {
            //gerando número da sala
            for (let i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString()
            }

            //verificando se sala já existe cadastrada no banco
            //usamos all quando o banco retorna algo
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)

            //some verifica se existe essa condição
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

            if (!isRoom) {

                //inserindo a sala e a senha no banco de dados
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
    
        }

        await db.close() //fechando conexão com o banco

        res.redirect(`/room/${roomId}`)//redirecioando url
    }
}