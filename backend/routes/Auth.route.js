const {Router} = require('express');
const { RegistrationFun, SigninFun } = require('../controller/authController');

const authRouter = Router();

authRouter.post('/register', RegistrationFun);
authRouter.post('/login', SigninFun);

module.exports = {authRouter};

