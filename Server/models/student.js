import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    faculty: String,
    department: String,
    degree: String

})


const student = mongoose.model('student', studentSchema);

export default student;