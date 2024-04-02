
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next) => {
    const token = req?.headers?.authentication?.split(" ")[1];
    // console.log(req)
    try {
        if (token) {
            let decoded = jwt.verify(token, process.env.SECRETKEY);

            req.body.userId = decoded.userId
            req.body.username = decoded.username

            next()
        } else {
            res.send("User not authenticated.")
        }
    }
    catch (err) {
        res.send({ message: err })
    }
}

module.exports = { authentication };