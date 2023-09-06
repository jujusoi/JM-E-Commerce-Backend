const category = require('express').Router();
const { Category, Product } = require('../../models');

category.get('/', async (req, res) => {
    try { 
        const categoryData = await Category.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(categoryData);
     } catch (err) {
         res.status(500).json(`Could not respond with data, ${err}`);
     }
 });
 
 category.get('/:num', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.num, {
            include: [{ model: Product }],
        });
        if (!categoryData) {
            res.status(404).json(`No category found`);
        } else {
            res.status(200).json(categoryData);
        }
    } catch (err) {
        res.status(500).json(`Could not respond with data, ${err}`);
    }
})

 module.exports = category;
 