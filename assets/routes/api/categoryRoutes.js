const category = require('express').Router();
const { Category, Product } = require('../../models');

category.get('/', async (req, res) => {
    try { 
        const categoryData = await Category.findAll({
            include: [{ model: Product }],
            order: [
                [ 'id', 'ASC' ],
            ],
        });
        res.status(200).json(categoryData);
     } catch (err) {
         res.status(500).json(`Could not respond with data, ${err}`);
     }
 });
 
 category.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
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
});

category.post('/', async (req, res) => {
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(400).json(`Could not post information! ${err}`);
    }
});

category.delete('/:id', async (req, res) => {
    try {
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(`Category deleted!`);
    } catch (err) {
        res.status(500).json(`Could not remove information from database, ${err}`);
    }
});

category.put('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id);
        if (!categoryData) {
            res.status(404).json(`Table to update not found`);
        } else {
        categoryData.set({
            category_name: req.body.category_name,
        });
        await categoryData.save();
        res.status(200).json(categoryData);
        }
    }
    catch (err) {
        res.status(500).json(`Cannot update database information, ${err}`);
    }
})

 module.exports = category;
 