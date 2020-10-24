import { Schema, model } from "mongoose";

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

export default Project