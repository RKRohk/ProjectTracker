const express = require("express");
const morgan = require("morgan");
import taskRouter from "./routers/taskRouter";
import userRouter from "./routers/userRouter";
import loginRouter from "./routers/loginRouter";
import middleware from "./utils/middleware";
import projectRouter from "./routers/projectRouter";
import config from "./utils/config";
const db = require("./mongo");
const path = require("path");

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

const app = express();

//Applying middleware
app.use(express.json());
app.use(morgan("combined"));

app.get("/test", (req, res) => {
  res.json({ data: "Hello" });
});

app.use(middleware.authMiddleWare);
app.use("/api/task", taskRouter);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/project", projectRouter);

app.use(express.static(path.join(__dirname, "build")));

if (config.NODE_ENV === "production") {
  app.get("/*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
app.use(middleware.errorHandler);

app.use(middleware.unknownEndpoint);

module.exports = app;
