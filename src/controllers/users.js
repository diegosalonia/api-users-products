const express = require("express");
const User = require("../models/user")

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllUsers = async(req, res, next) => {
  try {
    const users = await User.find()
    res.json(users);    
  } catch (error) {
    next(error)
  }
};

const createUser = async(req, res, next) => {
  try {
    let user = req.body;
    user = await User.create(user);
    const result = {
      mesagge: "User Created",
      user,
    };
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }


};

const updateUser = async(req, res, next) => {
  try {
    const { _id } = req.params;
    const user = req.body;
  
    
    
    await User.updateOne(user);
  
    const result = {
      mesagge: "User Updated",
      user,
    };
    res.json(result);    
  } catch (error) {
    next(error)
  }
};

const deleteUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
  
    await User.deleteOne(user)
  
    const result = {
      mesagge: `User with id: ${id} deleted`,
    };
    res.json(result);    
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
