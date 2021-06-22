const { validationResult } = require('express-validator');
const AppError = require('../errors/appError');

const validateResult = (req, res, next) => {
    const errors = validationResult(req, res, next);
    if(!errors.isEmpty()){
        throw new AppError('Validation Errors', 400, errors.errors);
    }
    next();
}

module.exports = {
    validationResult: validateResult,
}