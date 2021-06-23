const { Router } = require('express');
const { getAllUsers, getById, createUser, updateUser, deleteUser } = require('../controllers/users')
const { 
    postRequestValidation, 
    putRequestValidation,
    getAllRequestValidation,
    getRequestValidation,
    deleteRequestValidations
 } = require('../middlewares/users');
const router = Router()

router.get('/', getAllRequestValidation, getAllUsers);
router.get('/:id', getRequestValidation, getById);
router.post('/', postRequestValidation, createUser);
router.put('/:id', putRequestValidation, updateUser);
router.delete('/:id', deleteRequestValidations, deleteUser);

module.exports = router;
