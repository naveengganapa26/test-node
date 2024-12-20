const Joi = require('joi');

const restaurantSchema = Joi.object({
  name: Joi.string().required(),
  offerPercentage: Joi.number().min(0).max(100).required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  postalCode: Joi.string().required(),
  imageUrl: Joi.string().uri().required(),
  rating: Joi.number().min(0).max(5).required()
});

module.exports = async (req, res, next) => {
  try {
    await restaurantSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.details[0].message });
  }
};