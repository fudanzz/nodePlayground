var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.setHeader('X-Power-by', 'fudanzz');
    res.statusCode = 200;
    res.write('hello express');
    res.end();
})


app.get('/user/:username', (req, res) => {
    res.end(req.params.username);
    res.end();
})

app.route('/dexter')
    .get((req, res) => {
        res.send('get a dexter');
    })
    .post((req, res) => {
        res.send('post a dog');
    });


var gizmo = require('./router.js');

app.use('/gizmo', gizmo);
app.listen(8080, '127.0.0.1');
