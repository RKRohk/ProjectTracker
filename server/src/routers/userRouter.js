import { createUser } from '../helpers/userHelper'

const router = require('express').Router()

router.post('/createUser',async (request,response,next) => {
    const userName = request.body.userName
    const password = request.body.password
    const email = request.body.email

    await createUser(userName,email,password)

    response.status(201).json({success:true})
})

module.exports = router