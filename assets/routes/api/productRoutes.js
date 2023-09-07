const product = require('express').Router();
const { Product, Category, Tag } = require('../../models');
const category = require('./categoryRoutes');

product.get('/', async (req, res) => {
    try { 
        const productData = await Product.findAll({
            include: [{ model: Category }, { model: Tag }],
            order: [
                [ 'category_id', 'ASC'],
            ],
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

 product.post('/', async (req, res) => {
    try {
        const productData = await Product.create(req.body);
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(`Could not create new product, ${err}`);
    }
 });

 product.delete('/:id', async (req, res) => {
    try {
        const productData = await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(`Product deleted!`);
    } catch (err) {
        res.status(500).json(`Could not remove product from database, ${err}`);
    }
 });

 product.put('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id);
        if (!productData) {
            res.status(404).json(`Product does not exist!`);
        } else {
        productData.set({
            product_name: req.body.product_name,
            price: req.body.price,
            stock: req.body.stock,
            category_id: req.body.category_id,
        });
        await productData.save();
        res.status(200).json(productData);
    }
    } catch (err) {
        res.status(500).json(`Could not update database information, ${err}`);
    }
 })
 
 module.exports = product;
 