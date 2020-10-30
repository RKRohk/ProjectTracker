const Task = require('../models/task').default
const logger = require('../utils/logger').default

const router = require('express').Router()

const createTask = async body => {
        const task = new Task(body)
        const res = await task.save()
        console.log(res)
}

/**
 * Creates a task
 */
router.post('/createTask',async (request,response,next) => {
    logger.info("HELLO")
    if(!request.token){
        response.status(401).json({error:"User not logged in"})
        return
    }
    try{
        await createTask(request.body)
        response.status(201).send()
    }
    catch(err){
        next(err)
    }
})


export default router