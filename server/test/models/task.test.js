const request = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const Task = require('../../src/models/task')
const { deleteOne } = require('../../src/models/task')
// beforeAll( async () => {
//     const url = `mongodb://db:27017/test`
//     await mongoose.connect(url, { useNewUrlParser: true })
// })

describe('Testing creation of task', () => {
    it('should create task',async () => {
        const res = await request(app).post('/api/task/createTask').send({
            title:"Start making the project",
            createdAt:Date.now()
        })
        expect(res.status).toEqual(201)
    })

    it('created task should be found',async () => {
        const task = await Task.findOne({title:"Start making the project"}).exec()
        expect(task.title).toEqual("Start making the project")
    })

    afterAll(async() => {
        await mongoose.disconnect()
    })
})


