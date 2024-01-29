const userModel = require('../models/user.model');

const getUser = async (_req, res) => {
  const users = await userModel.getUser();

  return res.status(200).json(users);
};

module.exports = {
  getUser
};