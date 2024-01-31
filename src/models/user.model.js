const connection = require('../connection');

const getUser = async () => {
  const [users] = await connection.execute('SELECT * FROM user');
  return users;
};

module.exports = {
  getUser
};