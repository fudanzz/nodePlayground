var EventEmitter = require('events');

module.exports = class OurEmitter extends EventEmitter {
    constructor() {
        super();
        this.intervalId = setInterval(() => {
            if (this.intervalId === null) this.emit('error', new Error('no timeout'));
            this.emit('second', Date.now())
        }, 1000);


        setTimeout(() => {
            this.emit('error', new Error('random error'))
        }, 5000);

        setTimeout(() => {
            this.emit('error', 'it should end now');
            clearInterval(this.intervalId);
        }, 10000);

    }








}
