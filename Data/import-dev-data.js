const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})
const Car = require('../Models/carModel')

mongoose.connect(process.env.CONN_STR, {
  useNewUrlParser: true,
})
.then((conn) => {
  console.log("MongoDB connected....")
})
.catch((err) => {
  console.log(err.message)
})

const cars = JSON.parse(fs.readFileSync('./Data/carCollection.json', 'utf-8'))

const deleteMovies = async () => {
  try{
    await Car.deleteMany()
    console.log('Data successfully deleted')

  }catch(err) {
    console.log(err.message)
  }
  process.exit()
}
const importMovies = async () => {
  try{
    await Car.create(cars)
    console.log('Data successfully imported')

  }catch(err) {
    console.log(err.message)
  }
  process.exit()
}

if(process.argv[2] === '--delete'){
  deleteMovies()
}
if(process.argv[2] === '--import'){
  importMovies()
}