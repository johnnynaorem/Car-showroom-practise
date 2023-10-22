
const Car = require('../Models/carModel')
const ApiFeatures = require('../utils/ApiFeatures')

// exports.checkId = (req,res,next,value) => {

//   let car = cars.find(el => el.id === value*1)

//   if(!car){
//     return res.status(404).json({
//       status: "fail",
//       message: `Car with ID ${value} is not found`
//     })
//   }
//   next();
// }

exports.getAllCars = async (req,res) => {
  // res.status(200).json({
  //   status: "success",
  //   data : {
  //     cars: cars
  //   }
  // })
  try{
    const features = new ApiFeatures(Car.find(), req.query).filter().sort().limitFields().pagination()
    const cars = await features.query

    res.status(200).json({
          status: "success",
          count: cars.length,
          data: {
            cars
          }
        })
  }catch(err){
    res.status(400).json({
      status: "fail",
      message: err.message
    })
  }
}

exports.getCar = async (req,res) => {
  // const id = req.params.id * 1;
  // // console.log(id)
  // const getCar = cars.find( el => el.id === id);
  // res.status(200).json({
  //   status: "success",
  //   data : {
  //     car: getCar
  //   }
  // })
  try{
    const car = await Car.findById(req.params.id)
    res.status(200).json({
      status: 'sucess',
      data: {
        car
      }
    })
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.createCar = async (req, res) => {
  // let newCar = req.body
  // // console.log(req.body)
  // let id = cars[cars.length - 1].id + 1;
  // // console.log(id)
  // let newAddedCar = Object.assign({'id': id}, newCar)
  // cars.push(newAddedCar)
  // // console.log(newAddedCar);
  // fs.writeFile('./Data/carcollection.json', JSON.stringify(cars), (err)=>{
  //   res.status(201).json({
  //     status: "success",
  //     data : {
  //       cars: newAddedCar
  //     }
  //   })
  // })
  try{
    const car = await Car.create(req.body)
    res.status(201).json({
          status: "success",
          data: {
            car
          }
        })
  }catch(err){
    res.status(400).json({
      status: "fail",
      message: err.message
    })
  }
}

exports.updateCar = async (req,res) => {
  // const id = req.params.id * 1;
  // const carToUpdate = cars.find( el => el.id === id);
  // const index = cars.indexOf(carToUpdate)

  // Object.assign(carToUpdate, req.body);
  // cars[index] = carToUpdate

  // fs.writeFile('./Data/carcollection.json', JSON.stringify(cars), (err)=>{
  //   res.status(200).json({
  //     status: "success",
  //     data : {
  //       car: carToUpdate
  //     }
  //   })
  // })
  try{
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true})
    res.status(201).json({
          status: "success",
          data: {
            car: updatedCar
          }
        })
  }catch(err){
    res.status(400).json({
      status: "fail",
      message: err.message
    })
  }
}

exports.deleteCar = async (req,res) => {
  // const id = req.params.id * 1;
  // const carToDelete = cars.find( el => el.id === id);
  // const index = cars.indexOf(carToDelete)
  // cars.splice(index, 1)
  // fs.writeFile('./Data/carcollection.json', JSON.stringify(cars), (err)=>{
  //   res.status(200).json({
  //     status: "success",
  //     data : {
  //       cars: cars 
  //     }
  //   })
  // })

  try{
    await Car.findByIdAndDelete(req.params.id)
    res.status(204).json({
          status: "success",
          data: null
        })
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err.message
    })
  }
}