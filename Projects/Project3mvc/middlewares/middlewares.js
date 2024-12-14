const fs = require('fs');

const logreq = (filename) => {
    return (req, res, next) => {
        console.log("Hello From Middleware 1");

        const logMessage = `${Date.now()} , path : ${req.path} , method : ${req.method}\n`;

        fs.appendFile(filename, logMessage, (err) => {
            if (err) {
                console.error("Error writing to log file", err);
            }
            next();  // Always call next() to continue the request cycle
        });
    };
};

module.exports = { logreq };
