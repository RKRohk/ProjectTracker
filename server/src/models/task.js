const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type:String,
        required:[true,"task title required"]
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
    },
})

const Task =  model('Task',taskSchema)

module.exports = Task