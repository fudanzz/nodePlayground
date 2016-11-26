var fs = require('fs');

function multiple_call(query, callback) {
    fs.readFile(query, 'utf-8', (err, data) => {
        fs.readFile(data.trim(), 'utf-8', (err, data) => {
            fs.readFile(data.trim(), 'utf-8', (err, data) => {
                callback(data);
            })
        })
    })
}



function multiple_call_with_error_check(query, callback) {
    fs.readFile(query, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            fs.readFile(data.trim(), 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.readFile(data.trim(), 'utf-8', (err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            callback(data);
                        }

                    })
                }

            })
        }

    })
}


//multiple_call('networkcall', (data) => console.log(data));
multiple_call_with_error_check('netqworkcall', (data) => console.log(data));
