var process = require('process'),
    zlip = require('zlib');
process.stdin.pipe(zlip.createGzip()).pipe(process.stdout);
