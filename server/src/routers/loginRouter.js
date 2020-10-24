const jwt = require('jsonwebtoken')
import {findUser,passwordCorrect} from '../helpers/loginHelper'
import { JWT_SECRET } from '../utils/config'

const router = require('express').Router()

router.post('/',async (request,response,next) => {
    const body = request.body
    const email = body.email
    const password = body.password
    try {
        const user = await findUser(email)
        if(!user &&  ! (await passwordCorrect(user,password))){
            return response.status(401).json({error:"invalid username or password"})
        }
        
        const userForToken = {
            username:user.username,
            id:user._id,
        }
    
        const token =jwt.sign(userForToken, "ROHAN")
    
        response.status(200).send({token,username:user.username,name:user.name}) 
    } catch (error) {
        next(error)
    }

})

export default router