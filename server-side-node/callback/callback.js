var fs = require('fs');

fs.readFile('nonexist', (err, data) => {
    console.log('not exist');
    console.log(err);
    console.log(data);
})


fs.readFile('test.txt', 'utf-8', (err, data) => {
    console.log('exist');
    console.log(err);
    console.log(data);
})
