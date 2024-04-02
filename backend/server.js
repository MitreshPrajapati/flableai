const express = require('express');
const cors = require('cors');
const { Connection } = require('./config/db');
const { userRouter } = require('./routes/User.route');
const { authRouter } = require('./routes/Auth.route');
const { authentication } = require('./middlewares/authMiddleware');
const { chatRouter } = require('./routes/Chat.route');


const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', (req, res) => {
    res.send("Hello from server");
})

app.use('/auth', authRouter);
app.use('/user', authentication, userRouter);
app.use('/chats', authentication, chatRouter);


// const PORT = 7070;
const PORT = process.env.PORT || 7070;
app.listen(PORT, async () => {
    try {
        await Connection;
        console.log(`listening on PORT ${PORT} `)
    } catch (err) {
        console.log('connection failed');
        console.log(err);
    }
})