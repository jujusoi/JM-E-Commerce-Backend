const tag = require('express').Router();
const { Tag, Product } = require('../../models');

tag.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(tagData);
     } catch (err) {
         res.status(500).json(`Could not select from database, ${err}`);
     }
 });

 tag.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            include: [{ model: Product }],
        });
        if (!tagData) {
            res.status(404).json(`Could not find tag in database!`);
        } else {
            res.status(200).json(tagData);
        }
    } catch (err) {
        res.status(500).json(`Could not select from database, ${err}`);
    }
 });

 tag.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(`Could not insert value into database, ${err}`);
    }
 });

 tag.delete('/:id', async (req, res) => {
    try {
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(`Could not remove value from database, ${err}`);
    }
 });

 tag.put('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id);
        tagData.set({
            tag_name: req.body.tag_name,
        });
        if (!tagData) {
            res.status(400).json(`Tag does not exist!`);
        } else {
        tagData.save();
        res.status(200).json(tagData);
        }
    } catch (err) {
        res.status(500).json(`Could not update value from database, ${err}`);
    }
 });

 module.exports = tag;
 