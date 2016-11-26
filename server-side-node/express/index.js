var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.setHeader('x-power-by', 'fudanzz');
    res.statusCode = 200;
    res.write('hello express');
    res.end();
})


app.listen(8080, '127.0.0.1');
