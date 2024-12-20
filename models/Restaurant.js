const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  offerPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);