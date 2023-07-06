// set up function to read file contents
// export an object containing a getfile function, which looks for a file at provided path.
// if file doesn't exists, immediately returns an error page.

const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");
module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html);
                res.end("There was an error serving content!");
            }
            res.end(data);
        });
    }
};