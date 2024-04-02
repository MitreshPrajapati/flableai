const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    userId: { type: 'string', required: true},
    chatName: { type: 'string', required: true },
    chat: [],
    // question: { type: 'string', required: true },
    // answer: { type: 'string', required: true },
    createdAt: { type: 'string', default: Date.now() },
}, { timestamps: true })

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;