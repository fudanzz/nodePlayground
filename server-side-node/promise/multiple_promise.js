var promiseReadFile = require('./promise_readFile.js');


promiseReadFile('networkcall').then((data) => {
    promiseReadFile(data).then((data) => {
        promiseReadFile(data).then((data) => {
            console.log('Data: ' + data);
        })
    })
}, (err) => {
    console.log(err);
})


function mutil_promise(firstFile) {
    return promiseReadFile(firstFile)
        .then((data) => promiseReadFile(data))
        .then((data => promiseReadFile(data)))
}

mutil_promise('networkcall').then((data) => {
    console.log(data);
});
