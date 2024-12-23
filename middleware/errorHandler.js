// Since we cannot add a error handler to each route individually we need a middleware that can handle all type of errors
// importing different status codes
const { constants } = require('../constants')
const errorHandler = (err, req, res, next) => {
    // if we already had a status code no problem but if don't then 500
    const statusCode = res.statusCode ? res.statusCode : 500;
    // res.json({ message: err.message, stackTrace: err.stack });

    switch (statusCode) {
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Error", message: err.message, stackTrace: err.stack });
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
        default:
            console.log("No error, all good!");
            break;
    }
    // next();
    res.send("All good buddy!   ")


};

module.exports = errorHandler;