const bcrypt = require('bcrypt')
const User = require('../models/user')
/** 
 * @param {String} userName 
 * @param {String} email 
 * @param {String} password 
 */
const createUser = async (userName,email,password) => {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password,saltRounds)

    const user = new User({
        userName,
        email,
        passwordHash
    })
    await user.save()
}

module.exports = {createUser}