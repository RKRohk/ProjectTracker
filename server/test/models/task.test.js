import request from 'supertest'
import app from '../../src/app'
const mongoose = require('mongoose')
import Task from '../../src/models/task'
import User from '../../src/models/user'
// beforeAll( async () => {
//     const url = `mongodb://db:27017/test`
//     await mongoose.connect(url, { useNewUrlParser: true })
// })
const testUser = {
    username:"RKRohk",
    email:"rkakar2000@gmail.com",
    password:"rohan1234"
}

describe('Testing creation of task when not logged in',() => {
    it('should not create a task',async() => {
        const res = await (await request(app).post('/api/task/createTask')).send({
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
    beforeAll( async() => {
        await User.deleteMany({})
        const response = await request(app).post('/api/user/createUser').send(testUser)
        const login = await request(app).post('/api/login').send(testUser)
        token = login.token
    })
    it('should create task',async () => {
        const res = await request(app).post('/api/task/createTask').send({
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


