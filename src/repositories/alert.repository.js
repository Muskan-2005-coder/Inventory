const Alert = require('../models/alert.model')
const logger = require('../utils/logger')

class AlertRepository {
  async createAlert(alertDetails) {
    try {
      const alert = await Alert.create(alertDetails)
      return alert
      
    } catch (error) {
      logger.error(`[AlertRepository][createAlert] :: ${error.message}`, error)
      throw error
    }
  }

  async getAlertById(alertId) {
    try {
      const alert = await Alert.findById(alertId)
      return alert

    } catch (error) {
      logger.error(`[AlertRepository][getAlertById] :: ${error.message}`, error)
      throw error
    }
  }

  async getAllAlerts() {
    try {
      const alerts = await Alert.find()
      return alerts

    } catch (error) {
      logger.error(`[AlertRepository][getAllAlerts] :: ${error.message}`, error)
      throw error
    }
  }

  async updateAlert(alertId, alertDetails) {
    try {
      const updatedAlert = await Alert.findByIdAndUpdate(alertId, alertDetails, { new: true })
      return updatedAlert

    } catch (error) {
      logger.error(`[AlertRepository][updateAlert] :: ${error.message}`, error)
      throw error
    }
  }

  async deleteAlert(alertId) {
    try {
      const deletedAlert = await Alert.findByIdAndDelete(alertId)
      return deletedAlert

    } catch (error) {
      logger.error(`[AlertRepository][deleteAlert] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports = AlertRepository