const product = require('express').Router();
const { Product, Category } = require('../../models');
const category = require('./categoryRoutes');

product.get('/', async (req, res) => {
    try { 
        const productData = await Product.findAll({
            include: [{ model: Category }],
        });
        res.status(200).json(productData);
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 product.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: [{ model: Category }],
        });
        if (!productData) {
            res.status(404).json(`Product does not exist!`);
        } else {
            res.status(200).json(productData);
        }
    } catch (err) {
        res.status(500).json(`Could not search from database, ${err}`);
    }
 });

 module.exports = product;
 