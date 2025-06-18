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
      logger.error(`[UserRepository][registerUser] :: ${error.message}`, error);
      throw error;
    }
  }
  
  async getUserByEmail (email) {
    try {
      const user = await Users.findOne({ email }).select('+password +email')
      return user

    } catch (error) {
      logger.error(`[UserRepository][getUserByEmail] :: ${error.message}`, error);
      throw error;
    }
  }
  
  async getUserByUsername (username) {
    try {
      const user = await Users.findOne({ username }).select('+password +email')
      return user
      
    } catch (error) {
      logger.error(`[UserRepository][getUserByUsername] :: ${error.message}`, error);
      throw error;
    }
  }
  
  async getAllUsers () {
    try {
      const users = await Users.find()
      return users
      
    } catch (error) {
      logger.error(`[UserRepository][getAllUsers] :: ${error.message}`, error);
      throw error;
    }
  }

  async updateUser (userId, userDetails) {
    try {
      const updatedUser = await Users.findByIdAndUpdate(userId, userDetails, { new: true })
      return updatedUser

    } catch (error) {
      logger.error(`[UserRepository][updateUser] :: ${error.message}`, error);
      throw error;
    }
  }

  async deleteUserWithId (userId) {
    try {
      const deletedUser = await Users.findByIdAndDelete(userId)
      return deletedUser

    } catch (error) {
      logger.error(`[UserRepository][deleteUserWithId] :: ${error.message}`, error);
      throw error;
    }
  }
}

module.exports = UserRepository