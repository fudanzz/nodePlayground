console.log("start of the script: " + new Date().toString());

setTimeout(() => console.log('first timeout: ' + new Date().toString()), 1000)

var wait = new Date().getTime();

while (new Date().getTime() < wait + 4000) {}
