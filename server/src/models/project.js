const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
    title:{
        type:String,
        required:[true,"Project title is required"]
    },
    description:{
        type:String,
        required:[true,"Project description is required"]
    },
    tasks:[{type: Schema.Types.ObjectId, ref:'Task'}]
})

const Project = model('Project',projectSchema)

module.exports = Project