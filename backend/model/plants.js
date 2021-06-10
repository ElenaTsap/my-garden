const mongoose = require('mongoose');

const plants = new mongoose.Schema({
    plantName: {
        type: String,
        required: true
    }, 
    photo: {
        type: String,
        required: false
    },
})

//connect my instance into collection contacts in mongoose
module.exports = mongoose.model('plants', plants)