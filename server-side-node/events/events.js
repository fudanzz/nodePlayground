var fs = require('fs');

var fileStream = fs.createReadStream('test.txt', 'utf-8');


var anotherListener = function () {
    console.log('another lister');
}

fileStream.on('open', () => {
    console.log('file open');
});

fileStream.on('open', anotherListener);


fileStream.on('data', (data) => {
    console.log('************' + data);
});


fileStream.once('close', () => {
    console.log('file close');
});


fileStream.emit('close');

console.log(fileStream.eventNames());



console.log(fileStream.getMaxListeners());
