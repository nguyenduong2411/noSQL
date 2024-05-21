const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    gioitinh: {
        type: String,
        require: true
    },
    tuoi: {
        type: Number,
        require: true
    },
    diemtoan: {
        type: Number,
        require: true
    },
    diemly: {
        type: Number,
        require: true
    },
    diemhoa: {
        type: Number,
        require: true
    }
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;