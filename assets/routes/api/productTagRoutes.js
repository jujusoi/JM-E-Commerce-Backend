const productTag = require('express').Router();

productTag.get('/', async (req, res) => {
    try { res.status(200).json(`Get request to product tags`);
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 module.exports = productTag;
 