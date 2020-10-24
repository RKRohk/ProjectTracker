/**
 * Function to log Info
 * @param  {...any} params 
 */
const info = (...params) => {
    console.log(...params)
}

/**
 * Function to log errors
 * @param  {...any} params 
 */
const error = (...params) => {
    console.error(...params)
}

export default  {
    info,error
}