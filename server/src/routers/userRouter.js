import { createUser } from '../helpers/userHelper'

const router = require('express').Router()

router.post('/createUser',async (request,response,next) => {
    const username = request.body.username
    const password = request.body.password
    const email = request.body.email

    try {
        const user = await createUser(username,email,password)
        response.status(201).json({user})

    } catch (error) {
        next(error)
    }
})

export default router