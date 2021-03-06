
module.exports = {
    read: async (req, res) => {
        try {
            let db = req.app.get('db')
            let messages = await db.getMessages()
            res.send(messages)
        } catch (error) {
            console.log('had a problem getting messages', error)
            res.status(500).send(error)
        }
    },

    create: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { message } = req.body
            let user_id = req.session.user ?
                req.session.user.id : 1
            let messages = await db.createMessage({user_id, message})
            res.send(messages)
        } catch (error) {
            console.log('had a problem creating message', error)
            res.status(500).send(error)
        }
    },

    update: async (req, res) => {
        try {
            let db = req.app.get('db')
        } catch (error) {
            console.log('had a problem getting comments', error)
            res.status(500).send(error)
        }
    },

    delete: async (req, res) => {
        try {
            let db = req.app.get('db')
        } catch (error) {
            console.log('had a problem getting comments', error)
            res.status(500).send(error)
        }
    },

}
