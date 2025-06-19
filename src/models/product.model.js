const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },

  sku: {
    type: String
  },

  category: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  thresholdLimit: {
    type: Number,
    required: true,
    default: 0
  },

  restockRecommended: {
    type: Boolean,
    default: false
  },

  shelfLifeDays: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

productSchema.pre('save', function (next) {
  this.sku = this._id.toString();
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
