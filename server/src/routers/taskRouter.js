const Task = require('../models/task').default
const logger = require('../utils/logger').default

const router = require('express').Router()

const createTask = async ({project,title}) => {
        const task = new Task({project,title})
        const res = await task.save()
        console.log(res)
        return res
}

/**
 * Creates a task
 */
router.post('/createTask',async (request,response,next) => {
    if(!request.token){
        response.status(401).json({error:"User not logged in"})
        next(new Error("AuthError"))
    }
    try{
        const task = await createTask(request.body)
        response.status(201).json(task)
    }
    catch(err){
        next(err)
    }
})


export default router