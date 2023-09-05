const router = require('express').Router();

const categories = require('./categoryRoutes');
const products = require('./productRoutes');
const productTags = require('./productTagRoutes');
const tags = require('./tagRoutes');

router.use('/categories', categories);
router.use('/products', products);
router.use('/product-tags', productTags);
router.use('/tags', tags);

module.exports = router;