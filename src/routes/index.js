const express = require('express');
const router = express.Router();
const path = require('path');
const ProductController = require('../controller/product.controller')
router.use('/api/v1/product', require('./product'));

router.get('/', async(req, res) => {
    const indexView = path.join(__dirname, '../views/index.ejs')
    const product = await ProductController.getListProduct();
    res.render(indexView, { data: product });
});

router.get('/detail/:id', async(req, res) => {
    const id = req.params.id;
    const indexView = path.join(__dirname, '../views/detail.ejs')
    const product = await ProductController.getProduct(id);
    res.render(indexView, { product });
});

router.get('/admin', async(req, res) => {
    const indexView = path.join(__dirname, '../views/admin.ejs')
    res.render(indexView);
});
module.exports = router;