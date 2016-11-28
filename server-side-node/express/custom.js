var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.use((req, res, next) => {
    console.log('in the middle');
    req.custom = {};
    req.custom.testParam = 'test msg';
    next();
});


app.use((req, res, next) => {
    console.log('in the middle2');
    console.log(req.cookies);
    console.log(req.custom);
    next();
});

app.get('/', (req, res) => {
    console.log('in the middle3');
    res.send('root');
    res.end();
})


app.listen(8080, '127.0.0.1');
