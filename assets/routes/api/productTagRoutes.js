const productTag = require('express').Router();
const { ProductTag } = require('../../models');
const product = require('./productRoutes');

productTag.get('/', async (req, res) => {
    try { 
        const productTagData = await ProductTag.findAll();
        res.status(200).json(productTagData)
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 productTag.get('/:id', async (req, res) => {
    try {
        const productTagData = await ProductTag.findByPk(req.params.id); 
        if (!productTagData) {
            res.status(404).json(`Product tag does not exist`);
        } else {
            res.status(200).json(productTagData);
        }
    } catch (err) {
        res.status(500).json(`Could not select value from database, ${err}`);
    }
 });

 productTag.post('/', async (req, res) => {
    try {
        const productTagData = await ProductTag.create(req.body);
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(`Could not insert value into database, ${err}`);
    }
 });

 productTag.delete('/:id', async (req, res) => {
    try {
        const productTagData = await ProductTag.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(`Could not remove value from database, ${err}`);
    }
 });

 module.exports = productTag;
 