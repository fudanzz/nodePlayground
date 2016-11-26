var promiseReadFile = require('./promise_readFile.js');


promiseReadFile('test.txt').then((data) => {
    console.log('Data: ' + data);
}, (err) => {
    console.log(err);
})
