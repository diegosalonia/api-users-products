const { validationResult } = require('express-validator');
const AppError = require('../errors/appError');

const validResult = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new AppError('Validation Errors', 400, errors.errors);
        }
        next();        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    validationResult: validResult,
}