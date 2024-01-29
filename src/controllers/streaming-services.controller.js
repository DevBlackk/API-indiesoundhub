const streamingServiceModel = require('../models/streaming-services.model');

const getStreamingServices = async (_req, res) => {
  const streamingServices = await streamingServiceModel.getStreamingServices();

  return res.status(200).json(streamingServices);
};

module.exports = {
  getStreamingServices
};