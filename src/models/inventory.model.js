/**
 * Inventory Model Fields
 *
 * product             : ObjectId   // Reference to the Product
 * quantity            : number     // Available units
 * location            : ObjectId   // Reference to the Storage location
 * supplierId          : ObjectId   // Link to supplier (user)
 * expiryDate          : Date       // For perishable items
 * shelfLifeDays       : number     // Expected life span
 */

const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },

  quantity: {
    type: Number,
    default: 0
  },

  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Storage',
    default: null
  },

  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

}, { timestamps: true })

const inventoryModel = mongoose.model('inventory', inventorySchema)
module.exports = inventoryModel