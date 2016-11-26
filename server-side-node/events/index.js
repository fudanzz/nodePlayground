var OurEmitter = require('./ourEventEmitter.js');

var emitter = new OurEmitter();

var log = (l) => console.log(l);


emitter.on('second', log);

emitter.on('error', log);
