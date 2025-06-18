/**
 * Product Model Fields
 *
 * productName         : string     // Name of the product
 * category            : string     // E.g., “grains”, “electronics”
 * quantity            : number     // Available units
 * location            : string     // Warehouse location (Place to store it/Rack)
 * supplierId          : ObjectId   // Link to supplier (user)
 * expiryDate          : Date       // For perishable items
 * thresholdLimit      : number     // When to trigger low stock alert
 * shelfLifeDays       : number     // Expected life span
 * restockRecommended  : boolean    // Used by AI to suggest restocking
 */

const productCategories = [
  "groceries",
  "freshProduce",
  "dairyEggs",
  "meatSeafood",
  "frozenFoods",
  "beverages",
  "snacks",
  "bakery",
  "pantryEssentials",
  "cleaningHousehold",
  "healthWellness",
  "personalCare",
  "babyProducts",
  "petSupplies",
  "electronics",
  "computersAccessories",
  "homeKitchen",
  "furniture",
  "appliances",
  "toolsHardware",
  "automotive",
  "sportsOutdoors",
  "toysGames",
  "booksMedia",
  "stationeryOffice",
  "clothingMen",
  "clothingWomen",
  "clothingKids",
  "footwear",
  "jewelryAccessories",
  "beautyCosmetics"
];

const storageLocations = [
  "A1",
  "A2",
  "A3",
  "B1",
  "B2",
  "B3",
  "C1",
  "C2",
  "C3",
  "D1",
  "D2",
  "FzO1",
  "FzO2",
  "notAllotted"
];

const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },

  category: {
    type: String,
    enum: productCategories
  },

  quantity: {
    type: Number,
    default: 0
  },

  location: {
    type: String,
    enum: storageLocations,
    default: 'notAllotted'
  },

  supplierId: {
    type: String,
    required: true
  },

  expiryDate: {
    type: Date
  },

  thresholdLimit: {
    type: Number
  },

  shelfLifeDays: {
    type: Number,
    default: 0
  },

  restockRecommended: {
    type: Boolean,
    default: false
  },

}, { timestamps: true })

const inventoryModel = mongoose.model('inventory', inventorySchema)
module.exports = inventoryModel