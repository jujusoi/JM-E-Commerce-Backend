const productTag = require('express').Router();
const { ProductTag } = require('../../models');

productTag.get('/', async (req, res) => {
    try { 
        const productTagData = await ProductTag.findAll();
        res.status(200).json(productTagData)
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 productTag.post('/', async (req, res) => {
    try {
        const productTagData = await ProductTag.create(req.body);
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(`Could not insert value into database, ${err}`);
    }
 })

 module.exports = productTag;
 