const { check, validationResult } = require('express-validator');
const AppError = require('../../errors/appError');
const userService = require('../../service/userService');
const { ROLES } = require('../../constants');

const _nameRequired = check('name', 'Name required').not().isEmpty();
const _lastNameRequired = check('lastName', 'Last Name required').not().isEmpty();
const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email in invalid').isEmail();
const _emailExist = check('email').custom(
    async (email = '') => {
        const userFound = await userService.findByEmail(email);
        if(userFound) {
            throw new AppError('Email already exists in the DB', 400)
        }
    }
)
const _optionalEmailValid = check('email', 'Email in invalid').optional().isEmail();
const _optionalEmailExist = check('email').optional().custom(
    async (email = '') => {
        const userFound = await userService.findByEmail(email);
        if(userFound) {
            throw new AppError('Email already exists in the DB', 400)
        }
    }
)
const _passwordRequired = check('password', 'Password required').not().isEmpty();
const _roleValid = check('role').optional().custom(
    async (role = '') => {        
        if(!ROLES.includes(role)) {
            throw new AppError('Invalid Role', 400)
        }
    }
)
const _dateValid = check('birthdate').optional().isDate('MM-DD-YYYY');

const _idRequired = check('id').notEmpty();
const _idIsMongoDB = check('id').isMongoId();
const _idExist = check('id').custom(
    async (id = '') => {
        const userFound = await userService.findById(id);
        if(userFound) {
            throw new AppError('The id doesn\'t exist in the DB', 400)
        }
    }
)


const _validationResult = (req, res, next) => {
    const errors = validationResult(req, res, next);
    if(!errors.isEmpty()){
        throw new AppError('Validation Errors', 400, errors.errors);
    }
    next();
}

const postRequestValidation = [
    _nameRequired,
    _lastNameRequired,
    _emailRequired,
    _emailValid,
    _emailExist,
    _passwordRequired,
    _roleValid,
    _dateValid,
    _validationResult,
]

const putRequestValidation = [
    _idRequired,
    _idIsMongoDB,
    _idExist,
    _optionalEmailExist,
    _optionalEmailValid,
    _roleValid,
    _dateValid,
    _validationResult,
]

module.exports = {
    postRequestValidation,
    putRequestValidation
}