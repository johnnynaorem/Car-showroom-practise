const express = require('express')
const carController = require('../Controller/carController')


const route = express.Router()

// route.param('id', carController.checkId)

route.route('/')
  .get(carController.getAllCars)
  .post(carController.createCar)

route.route('/:id')
  .get(carController.getCar)
  .patch(carController.updateCar)
  .delete(carController.deleteCar)

module.exports = route;