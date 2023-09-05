const tag = require('express').Router();

tag.get('/', async (req, res) => {
    try { res.status(200).json(`Get request to tags`);
     } catch (err) {
         res.status(500).json(`Failed, ${err}`);
     }
 });

 module.exports = tag;
 