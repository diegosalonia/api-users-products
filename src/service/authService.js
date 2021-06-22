const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config')
const userService = require("../service/userService");
const AppError = require("../errors/appError");

const login = async (email, password) => {
  try {
    const user = await userService.findByEmail(email);
    if (!user) {
      throw new AppError('Authentication failed! Email/ password does not correct', 400);
    }

    if(!user.enable) {
        throw new AppError('Authentication failed! User disabled', 400)
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        throw new AppError('Authentication failed! Email/ password does not correct', 400)
    }

    const token = _encrypt(user._id);

    return {
        token,
        user: user.name,
        role: user.role
    }

  } catch (error) {
    throw (error);
  }
};

_encrypt = id => {
    return jwt.sign({id}, config.auth.secret, { expiresIn: config.auth.ttl });
}

module.exports = {
  login,
};
