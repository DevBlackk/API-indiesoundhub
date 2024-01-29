const musicsModel = require('../models/musics.model');

const getMusics = async (_req, res) => {
  const musics = await musicsModel.getMusics();

  return res.status(200).json(musics);
};

module.exports = {
  getMusics
};