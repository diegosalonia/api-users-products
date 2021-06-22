const { Router } = require('express');
const { getAllUsers, getById, createUser, updateUser, deleteUser } = require('../controllers/users')
const router = Router()

router.get('/', getAllUsers);
router.get('/:id', getById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
