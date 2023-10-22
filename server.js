const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const app = require('./app')

mongoose.connect(process.env.CONN_STR, {
  useNewUrlParser: true
})
  .then((conn) => {
    // console.log(conn)
    console.log('MongoDB connected...')
  })
  .catch((err) => {
  console.log(err.message)
  })

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log("Server has started...")
  setTimeout(() => {
    console.log("Connecting to Database....please wait.....")
  }, 2000);
})