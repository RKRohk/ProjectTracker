import { connect, connection } from 'mongoose'
import { MONGODB_URI as _MONGODB_URI,NODE_ENV } from './utils/config'
import logger from './utils/logger'
const MONGODB_URI = _MONGODB_URI
const express = require('express')
const morgan = require('morgan')
const options = {useNewUrlParser:true,useUnifiedTopology:true}
const taskRouter = require('./routers/taskRouter')
const db = require('./mongo')

// if(NODE_ENV === "test"){
//   connect(`mongodb://db:27017/test`,options)
//   logger.info("Connected to test db")
// }
// else{
//   connect(MONGODB_URI,options)
// }
// const db = connection;
// db.on("error", err => {
//   logger.error("There was a problem connecting to mongo: ", err);
//   logger.info("Trying again");
//   setTimeout(() => conn(), 5000);
// });
// db.once("open", () => logger.info("Successfully connected to mongo"));

const app = express()



//Applying middleware
app.use(express.json())
app.use(morgan('combined'))

app.get('/test',(req,res) => {
    res.json({data:"Hello"})
})

app.use('/api/task',taskRouter)


module.exports = app