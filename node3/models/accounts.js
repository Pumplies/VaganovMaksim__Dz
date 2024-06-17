const mongoose = require('mongoose')
const Schema = mongoose.Schema
const accSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Users = mongoose.model('users', accSchema)

module.exports = Users;