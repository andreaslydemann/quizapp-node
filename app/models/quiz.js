const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

module.exports = mongoose.model('Quiz', schema);