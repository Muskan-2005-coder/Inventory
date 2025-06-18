/**
 * In this Layer we write only the Operations to perform on DB
 * NOT the LOGIC behind our main Business -> So it's like our CRUD Manager for DB
 */
const { BadRequestError } = require("../errors/client.error");
const { Users } = require("../models")
const logger = require('../utils/logger');

class UserRepository {
  async registerUser (userDetails) {
    try {
      const user = await Users.create(userDetails)
      return user

    } catch (error) {
      logger.error(`[UserRepository][registerUser] :: ${error.message}`, error)
      throw new BadRequestError('User Already Exists, Kindly Login!')
    }
  }

  async getUser(userDetails) {
    const fieldMap = { userId: '_id', email: 'email', phone: 'phone' }
    const key = Object.keys(fieldMap).find(k => userDetails[k])

    if (!key) throw new BadRequestError('No valid identifier provided. Expected email, phone, or userId.')

    const query = { [fieldMap[key]]: userDetails[key] }
    const user = await Users.findOne(query).select('+password +email')
    return user
  }
  
  async getUserByEmail (email) {
    return Users.findOne({ email }).select('+password +email')
  }

  async getUserByPhone(phone) {
    return Users.findOne({ phone }).select('+password +email')
  }
  
  async getUserById(userId) {
    return Users.findById(userId).select('+password +email')
  }

  async getUsersByRole(role) {
    return Users.find({ role })
  }

  async getUsersByShift(shift) {
    return Users.find({ shift })
  }

  async getActiveUsers() {
    return Users.find({ active: true })
  }

  async getInactiveUsers() {
    return Users.find({ active: false })
  }

  async getUsersWithExtraShift() {
    return Users.find({ extraShift: true })
  }

  async getAllUsers () {
    return Users.find()
  }

  async updateUser (userId, userDetails) {
    return Users.findByIdAndUpdate(userId, userDetails, { new: true })
  }

  async deleteUserWithId (userId) {
    return Users.findByIdAndDelete(userId)
  }

  async getUsersWithHoursThisMonthGreaterThan(hours) {
    return Users.find({ hoursThisMonth: { $gt: hours } })
  }

  async getUsersWithHoursThisMonthLessThan(hours) {
    return Users.find({ hoursThisMonth: { $lt: hours } })
  }
}

module.exports = UserRepository