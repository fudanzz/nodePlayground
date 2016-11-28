var express = require('express');
var app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
})


app.get('/', (req, res) => {
    res.send('root');
})

app.use(express.static('static'));

app.get('/test.html', (req, res) => {
    console.log('this is from test.html');
    res.send('test.html');
    res.end();
})

app.listen(8080, '127.0.0.1');
