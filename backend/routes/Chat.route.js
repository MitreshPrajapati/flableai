const { Router } = require("express");
const { PromptHandler } = require("../controller/chatController");
const Chat = require("../models/Chat.model");

const chatRouter = Router();

chatRouter.get('/currentchat/:id', async (req, res) => {
    const { userId } = req.body;
    // const id = req.query.id;
    let id = req.params.id;

    console.log(id);
    try {
        let str = '';
        for(let i = 1; i <id.length; i++) {
            str += id[i];
        }
        if (id) {
            const chat = await Chat.findById(str);
            if (chat) res.send(chat);
            else res.send({ message: "Chat not found" });
        }
    } catch (error) {
        res.send({ message: error })
    }
})
chatRouter.post('/newchat', async (req, res) => {
    const { chatName, userId } = req.body;
    console.log(req.body);
    try {
        const newchat = await Chat({
            chatName: chatName,
            userId: userId
        })
        await newchat.save();
        res.send(newchat);
    } catch (error) {
        res.send(error)
    }
})

chatRouter.get('/getall', async (req, res) => {
    const id = req.body.userId;

    try {
        if (id) {
            const allChats = await Chat.find({ userId: id });
            res.send(allChats);
        }
    } catch (error) {
        res.send(error)
    }

});

chatRouter.put('/chat/:id', PromptHandler);

module.exports = { chatRouter };
