import request from 'supertest'
import app from '../../src/app'
import User from '../../src/models/user'
const mongoose = require('mongoose')

const sampleProject = {
    title:"Project Tracker",
    description:"A simple website that can be used to keep track of your projects"
}

const testUser = {
    username:"RKRohk",
    email:"rkakar2000@gmail.com",
    password:"rohan1234"
}

describe('Test operations before login', () => {
    it('Cannot GET projects without logging in',async () => {
        const response = await request(app).get('/api/project')

        expect(response.status).toEqual(401)
    })

    it('Cannot create new projects without logging in',async() => {
        const response = await request(app).post('/api/project/create').send(sampleProject)

        expect(response.status).toEqual(401)
    })

    // afterAll(async () => {
    //     mongoose.disconnect()
    // })
})

describe('Test operations after login', () => {
    let token = null
    let header = null
    beforeAll(async () => {
        //Doing creation and login of user
        await User.deleteMany({})
        await request(app).post('/api/user/createUser').send(testUser)
        const response = await request(app).post('/api/login').send(testUser)
        token = response.body.token
    })

    it("Initially number of projects is zero",async () => {
        const response = await request(app).get('/api/project').set('Authorization',`Bearer ${token}`)
        expect(response.status).toBe(200)
        expect(response.body.projects).toHaveLength(0)
    })

    it("Can create a project",async () => {
        const response = await request(app).post('/api/project/create').send(sampleProject).set('Authorization',`Bearer ${token}`)
        expect(response.status).toEqual(201)
    })

    it("Number of projects is 1", async () => {
        const response = await request(app).get('/api/project').set("Authorization",`Bearer ${token}`)
        expect(response.status).toBe(200)
        expect(response.body.projects).toHaveLength(1)
    })

    afterAll(async () => {
        mongoose.disconnect()
    })
})
