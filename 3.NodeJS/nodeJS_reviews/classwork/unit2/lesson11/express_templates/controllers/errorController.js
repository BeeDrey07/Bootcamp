httpStatus = require("http-status-codes");

// need to accept four arguments with this error handler:
// first one must always be error. 
// Without all four arguments, interpreted as normal middleware function.
exports.logErrors = (error, req, res, next) => {
    // log error stack.
    console.error(error.stack);
    // pass error to next middleware function.
    next(error);
};

// respond with a 404 status code:
// acts like an else block in an if-else block. If no other routes match request, responds with error.

// function without custom error pages:
// exports.respondNoResourceFound = (req, res) => {
//     let errorCode = httpStatus.NOT_FOUND;
//     res.status(errorCode);
//     res.send(`${errorCode} | The page does not exist!`);
// };

// function with custom error page
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};

// respondwith a 500 status code
// exports.respondInternalError = (error, req, res, next) => {
//     let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
//     console.log(`ERROR occurred: ${error.stack}`)
//     res.status(errorCode);
//     res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
// };
// custom error page
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};