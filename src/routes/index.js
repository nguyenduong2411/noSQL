const express = require('express');
const router = express.Router();
const path = require('path');
//const ProductController = require('../controller/product.controller')
//router.use('/api/v1/product', require('./product'));
const ProductModel = require('../models/product.model');

router.get('/', async(req, res) => {
    res.render('views/index');
});
router.post('/submit', (req, res) => {
    const data = req.body || {}
    try {
        ProductModel.insertMany({
            ten: data.name,
            gioitinh: data.gioitinh,
            tuoi: data.tuoi,
            diemToan: data.toan,
            diemLy: data.ly,
            diemHoa: data.hoa,
        })
    } catch (e) {
        throw new Error("Missing")
    } finally {
        res.redirect("/admin")
    }
})

router.get('/view', async(req, res) => {
    try {
        const data = await ProductModel.find().exec();
        res.render('views/index', { data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal server error');
    }
});
module.exports = router;