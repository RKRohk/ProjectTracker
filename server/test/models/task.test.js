const request = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
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
    afterAll(async() => {
        await mongoose.disconnect()
    })
})


