const artistModel = require('../models/artist.model');

const getArtist = async (_req, res) => {
  const artists = await artistModel.getArtists();

  return res.status(200).json(artists);
};

module.exports = {
  getArtist
};