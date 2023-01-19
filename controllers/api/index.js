const router = require('express').Router();
const userRoutes = require('./userRoutes');
const BlogRoutes = require('./BlogRoutes');

router.use('/users', userRoutes);
router.use('/blog', BlogRoutes);

module.exports = router;
