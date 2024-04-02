const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answer: String
});

const QuestionModal = mongoose.model("Question", questionSchema);

module.exports = QuestionModal;