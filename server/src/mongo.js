import { connect, connection } from 'mongoose'
import { MONGODB_URI as _MONGODB_URI, NODE_ENV } from './utils/config'
import logger from './utils/logger'
const MONGODB_URI = _MONGODB_URI

const options = {useNewUrlParser:true,useUnifiedTopology:true}

if(NODE_ENV === "test"){
  var conn =  () => { connect(`mongodb://db:27017`,options)}
  logger.info("Connected to test db")
}
else{
  var conn =  () => { connect(MONGODB_URI,options)}
}
conn()
const db = connection;
db.on("error", err => {
  logger.error("There was a problem connecting to mongo: ", err);
  logger.info("Trying again");
  setTimeout(() => conn(), 5000);
});
db.once("open", () => logger.info("Successfully connected to mongo"));

module.exports = db