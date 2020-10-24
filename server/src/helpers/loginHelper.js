import User from '../models/user'
import bcrypt from 'bcrypt'

/**
 * Returns user if user exists else returns null
 * @param {String} email
 */
const findUser = async email => {
    const user = await User.findOne({email:email})
    return user || false
}


/**
 * Returns true if password is correct
 * @param {User} user 
 * @param {string} password 
 */
const passwordCorrect = async (user,password) =>  await bcrypt.compare(password,user.passwordHash)

module.exports = {findUser,passwordCorrect}