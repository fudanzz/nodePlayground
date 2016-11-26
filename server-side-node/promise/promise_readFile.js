var fs = require('fs');

module.exports = function promise_readFile(fileName) {
    return new Promise((reslove, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) reject(err);
            reslove(data);
        })
    });
}
