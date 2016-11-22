var fs = require('fs');
console.log('start of the script: ' + new Date().toString());

fs.readFile('test.txt', (err, data) => {
    console.log('end reading: ' + data + new Date().toString());
})


setTimeout(() => console.log('add to event loop: ' + new Date().toString()), 0)

process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B() {
        console.log(2);
    });
});



console.log('end of main thread: ' + new Date().toString());
