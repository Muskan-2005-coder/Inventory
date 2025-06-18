/**
 * Package/Delivery Model Fields
 *
 * packageId        : string     // Unique identifier
 * status           : string     // Enum: "pending", "in_transit", "delivered"
 * currentLocation  : object     // { lat: Number, lng: Number }
 * destination      : string     // Delivery address
 * assignedTo       : ObjectId   // Driver (user)
 * eta              : Date       // AI-predicted ETA
 * transportMode    : string     // Enum: "truck", "bike", "drone"
 * lastUpdated      : Date       // For live tracking
 * createdAt        : Date       // Timestamp
 */

const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  packageId: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['pending', 'dispatched', 'inTransit', 'delivered'],
    default: 'pending'
  },

  currentLocation: {
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
  },

  destination: {
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
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  eta: {
    type: Date
  },

  transportMode: {
    type: string,
    enum: ['land', 'air', 'ship'],
    default: 'land'
  },
}, { timestamps: true })

const deliveryModel = mongoose.model('delivery', deliverySchema)
module.exports = deliveryModel


/**
 * 
 * Example Usage:
 * 
 * 
{
  packageId: "PKG12345",
  status: "inTransit",
  currentLocation: {
    coordinates: [72.834, 19.123]
  },
  destination: {
    coordinates: [73.001, 18.987]
  },
  assignedTo: ObjectId("665f9f4f2dabc1234567890a"),
  eta: ISODate("2025-06-18T16:00:00Z"),
  transportMode: "truck",
}
 * 
 * 
*/