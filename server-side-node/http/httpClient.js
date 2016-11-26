var http = require('http');

var httpOptions = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users',
    method: 'GET'
};

var httpCall = http.request(httpOptions, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        console.log(data);
    });
})

httpCall.end();
