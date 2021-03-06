const UserRepository = require('../repositories/userRepository');
const repository = new UserRepository();

const findById = async(id) => {
    return await repository.findById(id);
}

const findAll = async(filter, options) => {
    return await repository.findAllWithPagination(filter, options);
}

const save = async(user) => {
    return await repository.save(user);
}

const update = async(id, user) => {
    return await repository.update(id, user);
}

const deleteUser = async(id) => {
    return await repository.delete(id)
}

module.exports = {
    findById,
    findAll,
    save,
    update,
    deleteUser
}