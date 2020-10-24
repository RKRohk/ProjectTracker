import request from 'supertest'
import app from '../../src/app'
import User from '../../src/models/user'
import mongoose from 'mongoose'

const testUser = {
    username:"RKRohk",
    email:"rkakar2000@gmail.com",
    password:"rohan1234"
}

const testUser1 = {
    username:"SahilKr24",
    email:"sahilkumar@gmail.com",
    password:"ubuntu"
}

describe('Test user creation and user login', () => {
    beforeAll(async () => {
        await User.deleteMany({})
    })

    it('should create user',async () => {
        const response = await request(app)
        .post('/api/user/createUser')
        .send(testUser)
        
        expect(response.status).toEqual(201)
    })

    it('should not create multiple users with same username', async () => {
        const response = await request(app)
        .post('/api/user/createUser')
        .send(testUser)

        expect(response.status).toEqual(400)
        expect(response.body.error).toBeDefined()
    })

    it('should be able to create another user', async () => {
        const response = await request(app)
        .post('/api/user/createUser')
        .send(testUser1)

        expect(response.status).toEqual(201)
    })

    afterAll(async () => {
        await mongoose.disconnect()
    })

})
