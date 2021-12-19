module.exports = {
    create(req, res) {
        
        let roomId = 12345679

        
        
        res.redirect(`/room/${roomId}`)
    }
}