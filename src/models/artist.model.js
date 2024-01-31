const connection = require('../connection');

const getArtists = async () => {
  const [artists] = await connection.execute('SELECT * FROM artist');
  return artists;
};

module.exports = {
  getArtists
};