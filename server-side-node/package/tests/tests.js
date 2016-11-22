var assert = require('assert'),
    math = require('../math');

describe('math tests', function () {

    it('should add', function (done) {
        assert.strictEqual(math.add(1, 1), 2);
        done();
    });

    it('should subtract', function (done) {
        assert.strictEqual(math.subtract(5, 1), 4);
        done();
    });
})
