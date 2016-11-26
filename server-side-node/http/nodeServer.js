var http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
    console.log('request url is ' + req.url);
    res.write('node http server');
    res.end();
})

server.listen(8080, '127.0.0.1');
