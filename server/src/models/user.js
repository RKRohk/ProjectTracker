import { Schema, model } from "mongoose";

const userSchema = Schema({
    userName:{
        type:String,
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

const User = model('User',userSchema)

module.exports = User