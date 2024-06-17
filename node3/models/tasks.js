const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;