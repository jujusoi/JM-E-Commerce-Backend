const router = require('express').Router();
const routeRoutes = require('./api');

router.use('/api', routeRoutes);

module.exports = router;