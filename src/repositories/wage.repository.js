const Wage = require('../models/wages.model')
const logger = require('../utils/logger')

const CONTEXT = 'WageRepository'

class WagesRepository {
  async createWage(wageDetails) {
    try {
      const wage = await Wage.create(wageDetails)
      return wage

    } catch (error) {
      logger.error(`[${CONTEXT}][createWage] :: ${error.message}`, error)
      throw error
    }
  }

  async getWageById(wageId) {
    try {
      const wage = await Wage.findById(wageId).populate('user')
      return wage

    } catch (error) {
      logger.error(`[${CONTEXT}][getWageById] :: ${error.message}`, error)
      throw error
    }
  }

  async getWagesByUserId(userId) {
    try {
      const wages = await Wage.find({ userId }).populate('user')
      return wages

    } catch (error) {
      logger.error(`[${CONTEXT}][getWagesByUserId] :: ${error.message}`, error)
      throw error
    }
  }

  async getWagesByMonth(year, month) {
    try {
      const startDate = new Date(year, month - 1, 1)
      const endDate = new Date(year, month, 1)
      const wages = await Wage.find({
        month: {
          $gte: startDate,
          $lt: endDate
        }
      }).populate('user')
      return wages

    } catch (error) {
      logger.error(`[${CONTEXT}][getWagesByMonth] :: ${error.message}`, error)
      throw error
    }
  }

  async getOverworkedWages() {
    try {
      const wages = await Wage.find({ overworked: true })
      return wages

    } catch (error) {
      logger.error(`[${CONTEXT}][getOverworkedWages] :: ${error.message}`, error)
      throw error
    }
  }

  async updateWage(wageId, wageDetails) {
    try {
      const updatedWage = await Wage.findByIdAndUpdate(wageId, wageDetails, { new: true }).populate('user')
      return updatedWage

    } catch (error) {
      logger.error(`[${CONTEXT}][updateWage] :: ${error.message}`, error)
      throw error
    }
  }

  async deleteWage(wageId) {
    try {
      const deletedWage = await Wage.findByIdAndDelete(wageId)
      return deletedWage
      
    } catch (error) {
      logger.error(`[${CONTEXT}][deleteWage] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports =  WagesRepository