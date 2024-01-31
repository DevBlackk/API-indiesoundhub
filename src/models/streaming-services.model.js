const connection = require('../connection');

const getStreamingServices = async () => {
  const [streamingService] = await connection.execute('SELECT * FROM streaming_service');
  return streamingService;
};

module.exports = {
  getStreamingServices
};