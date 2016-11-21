module.exports = function (name) {
    var module = {};
    module.name = name;

    module.sayHi = function () {
        return 'hi,' + this.name;
    }

    return module;
}
