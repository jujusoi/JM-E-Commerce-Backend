const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');
const ProductTag = require('./producttag');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

Product.belongsToMany(Tag, 
    { 
    through: ProductTag,
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
    }
);

Tag.belongsToMany(Product, 
    { 
    through: ProductTag,
    foreignKey: 'tag_id',
    onDelete: 'CASCADE',
    }
);

module.exports = { Category, Product, Tag, ProductTag };