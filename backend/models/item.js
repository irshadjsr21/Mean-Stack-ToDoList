const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    is_done:{
        type: Boolean,
        required: true
    }
});

let Item = module.exports = mongoose.model('Item', ItemSchema);