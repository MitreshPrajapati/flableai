const { Router } = require("express");

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send("User router")
});

module.exports = { userRouter };