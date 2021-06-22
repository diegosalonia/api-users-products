const express = require("express");
const userService = require("../service/userService");
const Success = require("../helpers/successHandler");
const logger = require('../loaders/logger');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllUsers = async (req, res, next) => {
  try {
    const {filter, options } = req.query;
    const users = await userService.findAll(filter, options);
    res.json(new Success(users));
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getById = async (req, res, next) => {
  try {
    const user = await userService.findById(req.params.id);
    res.json(new Success(user));
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createUser = async (req, res, next) => {
  try {
    let user = req.body;
    user = await userService.save(user);
    res.status(201).json(new Success(user));
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;

    const userUpdate = await userService.update(id, user);
    res.json(new Success(userUpdate));
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    res.json(new Success(user));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getById,
  createUser,
  updateUser,
  deleteUser,
};
