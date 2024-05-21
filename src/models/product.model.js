const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    ten: {
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
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;