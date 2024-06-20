const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionsSchema = new Schema({

    question: {
        type: String,
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    rightans: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Questions = mongoose.model('questions', questionsSchema)

module.exports = Questions;