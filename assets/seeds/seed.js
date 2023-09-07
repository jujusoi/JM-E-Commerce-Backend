const sequelize = require('../config/connection');

const { Category, Product, Tag, ProductTag } = require('../models');

const categoryData = require('./categorySeeds.json');
const productData = require('./productSeeds.json');
const tagData = require('./tagSeeds.json');
const productTagData = require('./productTagSeeds.json');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        await Category.bulkCreate(categoryData);
        await Product.bulkCreate(productData);
        await Tag.bulkCreate(tagData);
        await ProductTag.bulkCreate(productTagData);

        console.log(`Data seeded`);
        process.exit(0);
    } catch (err) {
        console.error(`Could not seed data, ${err}`);
        process.exit(1);
    }

};

seed();