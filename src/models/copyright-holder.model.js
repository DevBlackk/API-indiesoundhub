const connection = require('..connection');

const getCopyrightHolder = async () => {
  const [copyrightHolders] = await connection.execute('SELECT * FROM copyright_holder');
  return copyrightHolders;
};

module.exports = {
  getCopyrightHolder
};