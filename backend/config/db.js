const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const URL = process.env.MONGO_URL
const Connection = mongoose.connect(URL);

module.exports = { Connection };