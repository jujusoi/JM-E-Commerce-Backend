const category = require('express').Router();

category.get('/', async (req, res) => {
    try { res.status(200).json(`Get request to categories`);
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 module.exports = category;
 