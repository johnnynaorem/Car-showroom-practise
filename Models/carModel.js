const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: [true, 'Name is required field'],
    unique: true,
    trim: true
  },

  Miles_per_Gallon: Number,
  Cylinders: Number,
  Displacement:Number,
  Horsepower: Number,
  Weight_in_lbs: Number,
  Acceleration:String,
  Origin: String
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car;