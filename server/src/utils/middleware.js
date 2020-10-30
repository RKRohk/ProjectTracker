import { token } from "morgan";
import logger from "./logger";


/**
 * Handler to handle unknown endpoints
 * @param {Request} request 
 * @param {Response} response 
 */
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

/**
 * Middleware to handle errors
 * @param {Error} error 
 * @param {Request} request 
 * @param {Response} response 
 * @param {Function} next 
 */
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  else if (error.name === "AuthError"){
    return response.status(401).json({error:"Authorization Error"})
  }

  next(error);
};

/**
 * Checks if request has a token and adds it to the request object
 * @param {Request} request 
 * @param {Response} response 
 * @param {NextFunction} next 
 */
const authMiddleWare = (request,response,next) => {
  const authorization = request.get('authorization')
  if(authorization && authorization.startsWith('Bearer ')){
    request.token = authorization.substring(7)
  }
  next()
}

export default {
  unknownEndpoint,
  errorHandler,
  authMiddleWare
};
