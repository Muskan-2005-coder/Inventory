/**
 * Inventory Model Fields
 * 
 */

const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
  name: {
    type: String
  },

  products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  ],

  totalCapacity: {
    type: Number,
    default: 0
  },

  capacityOccupied: {
    type: Number,
    default: 0
  },

  storage: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Storage',
      default: null
    }
  ],

  inventoryLocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
}, { timestamps: true })

const inventoryModel = mongoose.model('Inventory', inventorySchema)
module.exports = inventoryModel