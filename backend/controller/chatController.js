const Chat = require("../models/Chat.model");
const QuestionModal = require("../models/Questions.model");

const PromptHandler = async (req, res) => {
    let { prompt } = req.body;
    let id = req.params.id;
    if (!prompt) return res.status(400).send({ error: "No prompt provided" });

    try {
        let str = '';
        for (let i = 1; i < id.length; i++) {
            str += id[i];
        }
        const chat = await Chat.findById(str);
        if (chat) {
            prompt = prompt.toLowerCase();
            const response = await QuestionModal.find({
                question: { $regex: prompt, $options: 'i' },
            }).limit(1);

            if (response.length > 0) {
                const obj = {
                    question: response[0].question,
                    answer: response[0].answer,
                    prompt: prompt
                }

                const updateChat = await chat.updateOne({ $push: { chat: obj } });
                res.send(updateChat);
            } else {
                res.send({ message: "Prompt not matched with data." })
            }
        } else {
            res.send({ message: "Chat not found." })
        }

    } catch (error) {
        res.send(error);
    }
}

module.exports = { PromptHandler };





// const searchByTitle = async (req, res, next) => {
//     const query = req.query.q;
//     try {
//       const videos = await VideoModel.find({
//         title: { $regex: query, $options: "i" },
//       }).limit(40);
//       res.status(200).json(videos);
//     } catch (err) {
//       next(err);
//     }
//   };

















