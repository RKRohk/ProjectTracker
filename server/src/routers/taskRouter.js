const Task = require('../models/task')
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
    logger.info(request.body)
    try{
        await createTask(request.body)
        response.status(201).send()
    }
    catch(err){
        next(err)
    }
})


export default router