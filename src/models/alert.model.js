/**
 * Alert Model Fields
 *
 * type         : string     // Enum like: "low_stock", "delay", "overwork"
 * triggeredOn  : Date       // When the alert was triggered
 * resolved     : boolean    // Whether the alert has been cleared by admin
 * targetId     : ObjectId   // Reference to the related entity (e.g., inventoryId, deliveryId, etc.)
 * message      : string     // description of the alert
 */

const alertTypes = [
  "defaultAlert",
  "lowStock",
  "outOfStock",
  "deliveryDelay",
  "missedEta",
  "overwork",
  "inventoryMismatch",
  "routeDeviation",
  "unauthorizedAccess",
  "stockExpired",
  "systemError"
]

const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: alertTypes,
    default: 'defaultAlert'
  },

  triggeredOn: {
    type: Date,
    required: true,
    default: Date.now
  },

  resolved: {
    type: Boolean,
    default: false
  },

  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  message: {
    type: String,
    required: true
  }

}, { timestamps: true })

const alertModel = mongoose.model('alert', alertSchema)
module.exports = alertModel
