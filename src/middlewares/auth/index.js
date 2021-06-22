const { check } = require('express-validator');
const AppError = require('../../errors/appError');
const { validationResult } = require('../commons')

const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email in invalid').isEmail();
const _passwordRequired = check('password', 'Password required').not().isEmpty();

const postLoginRequestValidation = [
    _emailRequired,
    _emailValid,
    _passwordRequired,
    validationResult,
]

module.exports = {
    postLoginRequestValidation,
}