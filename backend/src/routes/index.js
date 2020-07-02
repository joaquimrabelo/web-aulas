const express = require('express');
const router = express.Router();

const publicRoutes = require('./public.routes');
const courseRoutes = require('./courses.routes');
const videoRoutes = require('./videos.routes');
const fileRoutes = require('./files.routes');
const profileRoutes = require('./profile.routes');
const authenticateRoutes = require('./authenticate.routes');

router.use(publicRoutes);
router.use(courseRoutes);
router.use(videoRoutes);
router.use(fileRoutes);
router.use(profileRoutes);
router.use(authenticateRoutes);

module.exports = router;