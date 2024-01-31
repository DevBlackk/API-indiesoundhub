const connection = require('../connection');

const getMusics = async () => {
  const [musics] = await connection.execute('SELECT * FROM music');
  return musics;
};

module.exports = {
  getMusics
};