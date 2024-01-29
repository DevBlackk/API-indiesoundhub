const copyrightHolderModel = require('../models/copyright-holder.model');

const getCopyrightHolder = async (_req, res) => {
  const copyrightHolder = await copyrightHolderModel.getCopyrightHolder();

  return res.status(200).json(copyrightHolder);
};

module.exports = {
  getCopyrightHolder
};