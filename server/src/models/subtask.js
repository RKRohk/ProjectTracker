const { Schema, model } = require("mongoose");

const subtaskSchema = new Schema({
    title: {
        type:String,
        required:[true,"subtask title required"]
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
    complete:{
        type:Boolean,
        default:false
    }
})

const SubTask = new model('SubTask',subtaskSchema)

export default SubTask