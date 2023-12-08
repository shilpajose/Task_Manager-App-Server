const mongoose = require('mongoose')

// Model Schema/fields for users
const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String
})
// Model fields for adding new task
const tasklistSchema = new mongoose.Schema({
    title: String,
    description: String,
    email:String,
    taskstatus:String,
    date:String
})
// admin model
const adminSchema= new mongoose.Schema({
    username:String,
    password:String
})

// model creation
const users = new mongoose.model("users", userSchema)
const tasklists = new mongoose.model("tasklists", tasklistSchema)
const admins= new mongoose.model("admins",adminSchema)



// exporting model for others to use 
module.exports = { users,tasklists,admins }