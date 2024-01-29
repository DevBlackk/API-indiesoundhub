const express = require('express');
const musicsController = require('./controllers/musics.controller');
const userController = require('./controllers/user.controller');
const artistController = require('./controllers/artist.controller');
const copyrightHolderController = require('./controllers/copyright-holder.controller');
const streamingServicesController = require('./controllers/streaming-services.controller');
const homeController = require('./controllers/home.controller');

const router = express.Router();

router.get('/', homeController.getHome);
router.get('/user', userController.getUser);
router.get('/artist', artistController.getArtist);
router.get('/music', musicsController.getMusics);
router.get('/artist/copyright-holder', copyrightHolderController.getCopyrightHolder);
router.get('/streaming-services', streamingServicesController.getStreamingServices);

module.exports = router;