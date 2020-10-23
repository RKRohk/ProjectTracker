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
    type:{
        type:String,
        enum:["Unlabelled","UI","I","U","NN"],
        default:"Unlabelled"
    },
    complete:{
        type:Boolean,
        default:false
    }
})

const Task =  model('Task',taskSchema)

module.exports = Task