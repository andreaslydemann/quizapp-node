const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Question', schema);