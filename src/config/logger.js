const pinoHttp = require("pino-http");
const { nanoid } = require("nanoid");

// if log level not set in .env file, then the default, "info", will be used
const level = process.env.LOG_LEVEL || "info"
const nodeEnv = process.env.NODE_ENV || 'development'
const prettyPrint = nodeEnv === "development"

const logger = pinoHttp({
    //if the request has a X-REQUEST-ID header then that will be used as the ID
    // otherwise nanoID will be called to generate an ID
    genReqId: (request) => request.headers['x-request-id'] || nanoid(),
    level,
    prettyPrint
});

module.exports = logger;