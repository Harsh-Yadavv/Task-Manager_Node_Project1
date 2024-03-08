const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    fName:{
        type: String,
        required: [true, 'Name must be included'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    completed:{
        type: Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)