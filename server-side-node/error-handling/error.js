var fs = require('fs'),
    net = require('net');

//syn error

try {
    JSON.parse('fsfs');
} catch (ex) {
    console.log(ex)
}

//async error

fs.readFile('fdfd', (err, data) => console.log(err))

//event error
