import request from 'supertest'
import app from '../../src/app'
import Project from '../../src/models/project'
const mongoose = require('mongoose')
import Task from '../../src/models/task'
import User from '../../src/models/user'

const testUser = {
    username:"RKRohk",
    email:"rkakar2000@gmail.com",
    password:"rohan1234"
}

const sampleProjects = [
    {
        title:"Project Tracker",
        description:"A project tracker made by Rohan"
    },
    {
        title:"PythonBot",
        description:"An aria2 telegram bot written on python"
    }
]

describe('Testing creation of task when not logged in',() => {
    it('should not create a task',async() => {
        const res = await request(app).post('/api/task/createTask').send({
            title:"Start making the project",
            createdAt:Date.now()
        })

        expect(res.status).toEqual(401)
    })

    afterAll(async () => {
        await mongoose.disconnect()
    })
})

describe('Testing creation of task', () => {
    let token = null
    let projects = []
    beforeAll( async() => {
        await User.deleteMany({})
        await Project.deleteMany({})
        const response = await request(app).post('/api/user/createUser').send(testUser)
        const login = await request(app).post('/api/login').send(testUser)
        token = login.token
        const user = await User.find(testUser)
        for (const project of sampleProjects) {
            const proj = new Project({...project,createdBy:user.id})
            const savedProject = await proj.save()
            projects.push(savedProject)
        }
        console.log("Projects",projects)
    })


    it('should create task',async () => {
        const res = await request(app).post('/api/task/createTask').send({
            project:"5fa079cf9144d200c44ff7c9",
            title:"Start making the project",
            createdAt:Date.now()
        }).set("Authorization",`Bearer ${token}`)
        expect(res.status).toEqual(201)
    })

    it('created task should be found',async () => {
        const task = await Task.findOne({title:"Start making the project"})
        expect(task.title).toEqual("Start making the project")
    })

    afterAll(async() => {
        await mongoose.disconnect()
    })
})


