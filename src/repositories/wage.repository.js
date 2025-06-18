const Wage = require('../models/wages.model')
const logger = require('../utils/logger')

class WagesRepository {
  async createWage(wageDetails) {
    try {
      const wage = await Wage.create(wageDetails)
      return wage

    } catch (error) {
      logger.error(`[WagesRepository][createWage] :: ${error.message}`, error)
      throw error
    }
  }

  async getWageById(wageId) {
    try {
      const wage = await Wage.findById(wageId)
      return wage

    } catch (error) {
      logger.error(`[WagesRepository][getWageById] :: ${error.message}`, error)
      throw error
    }
  }

  async getWagesByUserId(userId) {
    try {
      const wages = await Wage.find({ userId })
      return wages

    } catch (error) {
      logger.error(`[WagesRepository][getWagesByUserId] :: ${error.message}`, error)
      throw error
    }
  }

  async updateWage(wageId, wageDetails) {
    try {
      const updatedWage = await Wage.findByIdAndUpdate(wageId, wageDetails, { new: true })
      return updatedWage

    } catch (error) {
      logger.error(`[WagesRepository][updateWage] :: ${error.message}`, error)
      throw error
    }
  }

  async deleteWage(wageId) {
    try {
      const deletedWage = await Wage.findByIdAndDelete(wageId)
      return deletedWage
      
    } catch (error) {
      logger.error(`[WagesRepository][deleteWage] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports =  WagesRepository