require("@babel/register")({
    presets: ["@babel/preset-env"]
});
const app = require('./app')
const http = require('http')
const logger = require('./utils/logger').default
const config =  require('./utils/config').default

const PORT = config.PORT || 3001

const server = http.createServer(app)

server.listen(PORT,() => {
    logger.info(`Server running on port ${PORT}`)
})