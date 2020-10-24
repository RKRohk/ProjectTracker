import { Schema, model } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"User name is required"]
    },
    email:{
        type:String,
        required:[true,"User email is required"]
    },
    passwordHash:{
        type:String,
        required:[true,"Password hash is required"]
    },
    projects:[{type:Schema.Types.ObjectId, ref:"Project"}]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })

userSchema.plugin(uniqueValidator)

const User = model('User',userSchema)

export default User