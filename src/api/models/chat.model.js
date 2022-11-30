const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    key: {
        type: String,
        required: [true, 'key is missing'],
        unique: true,
    },
    chat: {
        type: Array,
    },
})

const Chat = mongoose.model('Chat', chatSchema)
const pesanSchema = new mongoose.Schema({
    key: {
        type: String,
        required: [true, 'key is missing'], 
    },
    pesan: {
        type: String,
    },
    fromMe: {
        type: Boolean,
    },
    no: {
        type: String,
    },
    jam: {
        type: String,
    },
})

const Pesan = mongoose.model('Pesan', pesanSchema)

module.exports = Chat
module.exports = Pesan
