const { Schema, model, Types } = require("mongoose");

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
    dueDate:{
        type:Date
    },
    type:{
        type:String,
        enum:["Unlabelled","UI","I","U","NN"],
        default:"Unlabelled"
    },
    complete:{
        type:Boolean,
        default:false
    },
    subTasks:[{type:Types.ObjectId,ref:"SubTask"}],
    project:{
        type:Types.ObjectId,
        ref:"Project",
        required:true
    }
})

const Task =  model('Task',taskSchema)

export default Task