const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },

  sku: {
    type: String
  },

  quantity: {
    type: Number,
    default: 0
  },

  weight: {
    type: Number,
    default: 0
  },

  dimensions: {
    length: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 }
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

  storage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Storage"
  },

  shelfLifeDays: {
    type: Number,
    default: 0
  },

  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  supplierLocation: {
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

}, { timestamps: true });

productSchema.pre('save', function (next) {
  this.sku = this._id.toString();
  next();
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;