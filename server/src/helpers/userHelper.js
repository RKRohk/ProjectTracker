import bcrypt from 'bcrypt'
import User from '../models/user'
const jwt = require('jsonwebtoken')

const saltRounds = 10

/** 
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 */
const createUser = async (username,email,password) => {
    const passwordHash = await bcrypt.hash(password,saltRounds)

    const user = new User({
        username,
        email,
        passwordHash
    })
    await user.save()
    return user
}

const decodeUser = token => jwt.verify(token,"ROHAN")

module.exports = {createUser,decodeUser}