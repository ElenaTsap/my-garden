const mongoose = require('mongoose');

const plants = new mongoose.Schema({
    name: {
        type: String,
        required: false
    }, 
    photo: {
        type: String,
        required: false
    },
})

//connect my instance into collection contacts in mongoose
module.exports = mongoose.model('plants', plants)