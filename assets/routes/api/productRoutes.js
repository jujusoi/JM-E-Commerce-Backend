const product = require('express').Router();

product.get('/', async (req, res) => {
    try { res.status(200).json(`Get request to products`);
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 module.exports = product;
 