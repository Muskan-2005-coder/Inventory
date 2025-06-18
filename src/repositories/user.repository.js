/**
 * In this Layer we write only the Operations to perform on DB
 * NOT the LOGIC behind our main Business -> So it's like our CRUD Manager for DB
 */
const { Users } = require("../models");

class UserRepository {
  async registerUser (userDetails) {
    try {
      const user = await Users.create(userDetails)
      return user

    } catch (error) {
      console.log('Something Wrong with Repository layer')
      throw error
    }
  }
  
  async getUserByEmail (email) {
    try {
      const user = await Users.findOne({ email })
      return user

    } catch (error) {
      console.log('Something Wrong with Repository layer')
      throw error
    }
  }
  
  async getUserByUsername (username) {
    try {
      const user = await Users.findOne({ username })
      return user
      
    } catch (error) {
      console.log('Something Wrong with Repository layer')
      throw error
    }
  }
  
  async getAllUsers () {
    try {
      const users = await Users.find()
      return users
      
    } catch (error) {
      console.log('Something Wrong with Repository layer')
      throw error
    }
  }
}

module.exports = UserRepository