const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/User.model");
require('dotenv').config();


const RegistrationFun = async (req, res) => {

    const { email, password, avatar, username } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            res.send({ message: "User already exists." })
        } else {
            bcrypt.hash(password, Number(process.env.ROUND), async function (err, hashedPassword) {

                if (err) {
                    res.send({ message: err.message })
                }

                const newUser = new User({
                    avatar,
                    username,
                    email,
                    password: hashedPassword
                })

                await newUser.save();
                res.send({ message: "User registred successfully." });

            });
        }
    } catch (error) {
        res.send({ message: "Server error", error: error });
    }
}


const SigninFun = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.send({ message: "User doesn't exists, Please Register." })
        } else {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    res.send({ message: err })
                } else {
                    if (result) {
                        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRETKEY)
                        const { password, ...userDetails } = user._doc;
                        res.send({message:"Login successfull.", userDetails, "token": token })
                    } else {
                        res.send({ message: "Wrong credintials." })
                    }
                }
            });
        }
    } catch (error) {
        res.send({ message: "Server error", error: error });
    }
}

module.exports = {
    RegistrationFun, 
    SigninFun
}