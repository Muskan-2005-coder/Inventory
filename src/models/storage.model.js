/**
 * Imp Things
 * 
 * length, width, height -> Cm,
 * locationId: can Add like A1, A2.. etc
 * holdingCapacity -> Kgs
 * currentVolume : cm3
 */

const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
  locationId: {
    type: String,
    required: true,
    unique: true
  },

  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  },

  holdingCapacity: {
    type: Number,
    required: true
  },

  currentVolume: {
    type: Number,
    default: 0
  },

  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory"
    }
  ]
}, { timestamps: true });

const Storage = mongoose.model("Storage", storageSchema);

module.exports = Storage;
