const mongoose = require('mongoose')

const createUser = new mongoose.Schema({
     age: Number,
     name: String,
     email: String,
     cell_number: Number,
})

const UserModel = mongoose.model("user", createUser)
module.exports = UserModel;