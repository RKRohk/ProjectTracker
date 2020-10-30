import { request } from 'express'
const logger = require('../utils/logger').default
const Project = require('../models/project').default
const router = require('express').Router()
const helpers = require('../helpers/userHelper')

router.get('/',async(request,response,next) => {
    try {
        if(!request.token){
            throw new Error("AuthError")
        }
        const user = helpers.decodeUser(request.token)
        console.log(user)
        const projects = await Project.find({createdBy:user.id})
        response.status(200).json({projects})
    } catch (error) {
        next(error)
    }
})

router.post('/create',async (request,response,next) => {
    try {
        if(!request.token){
            throw new Error("AuthError")
        }
        else{
            const user = helpers.decodeUser(request.token)
            const project = new Project({...request.body,createdBy:user.id})
            const save =await project.save()
            response.json(201).json({project:save})
        }
    } catch (err) {
        next(err)
    }
})

export default router