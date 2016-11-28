var express = require('express');
var app = express();

app.get('/error', (req, res, next) => {

    throw new Error('someting is wrong');
})


app.get('/error2', (req, res, next) => {

    next(new Error('someting is wrong'));
})

app.use((err, req, res, next) => {

    console.log(err);
    res.statusCode = 500;
    res.send('server side error');
    res.end();

});



app.listen(8080, '127.0.0.1');
