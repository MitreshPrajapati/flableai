const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default:"https://via.placeholder.com/150"}
})

const User = mongoose.model('User', userSchema);
module.exports = User;