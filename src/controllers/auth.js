const express = require("express");
const authService = require("../service/authService");
const Success = require("../helpers/successHandler");
const logger = require("../loaders/logger");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    res.json(new Success(await authService.login(email, password)));
    
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login
};
