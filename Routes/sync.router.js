import express from 'express'
import sequelize from '../Config/db.sequelize.js';
import Category from '../Models/category.model.js';
import Product from '../Models/product.model.js';
import Brand from '../Models/brand.model.js';
const router = express.Router();


// Syncronize sequelize models
router.get('/sync', (req, res) => {
    sequelize.sync()
    res.json({
        message: 'Syncronized models'
    });
});

export { router }