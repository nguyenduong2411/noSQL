const express = require('express');
const router = express.Router();
const path = require('path');
const StudentModel = require('../models/product.model');

router.get('/', async(req, res) => {
    res.render('admin');
});
router.post('/submit', (req, res) => {
    const data = req.body || {}
    try {
        StudentModel.insertMany({
            ten: data.ten,
            gioitinh: data.gioitinh,
            tuoi: data.tuoi,
            diemtoan: data.diemtoan,
            diemly: data.diemly,
            diemhoa: data.diemhoa,
        })
    } catch (e) {
        throw new Error("Missing")
    } finally {
        res.redirect("/view")
    }
})

router.get('/view', async(req, res) => {
    try {
        const data = await StudentModel.find().exec();
        res.render('view', { data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal server error');
    }
});
module.exports = router;