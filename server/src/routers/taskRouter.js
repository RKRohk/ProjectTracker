const Task = require('../models/task')
const logger = require('../utils/logger')

const router = require('express').Router()

const createTask = async body => {
        const task = new Task(body)
        await task.save()
}

/**
 * Creates a task
 */
router.post('/createTask',async (request,response,next) => {
    logger.info(request.body)
    try{
        createTask(request.body)
        response.status(201).send()
    }
    catch(err){
        next(err)
    }
})


module.exports = router