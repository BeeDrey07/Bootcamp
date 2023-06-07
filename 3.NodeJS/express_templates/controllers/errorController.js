const httpStatus = require("http-status-codes");
// exports.respondNoResourceFound = (req, res) => {
//     let errorCode = httpStatus.NOT_FOUND;
//     console.log("404 error" + errorCode)
//     res.status(errorCode);
//     res.send(`${errorCode} | The page does not exist!`);
// };
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    console.log(`ERROR occurred 404: ${error.stack}`);
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};
// exports.respondInternalError = (error, req, res, next) => {
//     let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
//     console.log(`ERROR occurred: ${error.stack}`)
//     res.status(errorCode);
//     res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
// };
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred 500: ${error.stack}`);
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};