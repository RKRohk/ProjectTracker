const request = require('supertest')
const app = require('../../src/app')
import User from '../../src/models/user'
const testUser = {
    username:"RKRohk",
    email:"rkakar2000@gmail.com",
    password:"rohan1234"
}


describe('Testing login', () => {
    beforeAll(async () => {
        await User.deleteMany({})

        await request(app).post('/api/user/createUser').send(testUser)

        console.log("User saved")
    })

    it('Should let user login',async () => {
        const response = await request(app)
        .post('/api/login')
        .send(testUser)

        expect(response.status).toEqual(200)
        expect(response.body.token).toBeDefined()
    })

    it('Should not allow wrong credentials',async() => {
        const response = await request(app)
        .post('/api/login')
        .send({...testUser,password:"meme123"})

        expect(response.status).toEqual(401)
        expect(response.error).toBeDefined()
    })


})


