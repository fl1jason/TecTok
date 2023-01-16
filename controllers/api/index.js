const router = require('express').Router();
const userRoutes = require('./userRoutes');
const BlogRoutes = require('./BlogRoutes');

router.use('/users', userRoutes);
router.use('/Blogs', BlogRoutes);

module.exports = router;
