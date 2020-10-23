const request = require('supertest')
const app = require('../../src/app')

const testUser = {
    userName:"RKRohk",
    email:"rkakar2000@gmail.com",
    password:"rohan1234"
}

describe('Test user creation and user login', () => {
    it('should create user',async () => {
        const response = await request(app)
        .post('/api/user/createUser')
        .send(testUser)
        
        expect(response.status).toEqual(201)
    })

    it('should be able to log user in',async () => {
        const response = await request(app)
        .post('/api/user/login')
        .send({testUser})

        expect(response.status).toEqual(200)
    })

    it('should return bearer token on login',async () => {
        const response = await request(app)
        .post('/api/user/login')
        .send({testUser})

        expect(response.status).toEqual(200)
        expect(response.header).toHaveProperty('token')
    } )
})
