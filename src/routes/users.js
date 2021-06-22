const { Router } = require('express');
const { getAllUsers, getById, createUser, updateUser, deleteUser } = require('../controllers/users')
const { postRequestValidation, putRequestValidation } = require('../middlewares/users');
const router = Router()

router.get('/', getAllUsers);
router.get('/:id', getById);
router.post('/', postRequestValidation, createUser);
router.put('/:id', putRequestValidation, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
