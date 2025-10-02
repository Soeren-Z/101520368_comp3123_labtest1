'use strict';

function resolvedPromise() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            const success = { "message": "delayed success!" }
            resolve(success);
        }, 500)
    })
}

function rejectedPromise() {
    return new Promise(function(reject) {
        setTimeout(() => {
            const error = { "error": "delayed exception!" };
            reject(error);
        }, 500)
    })
}

/*resolvedPromise()
    .then(result => console.log(result))
    .catch(result => console.log(result));

rejectedPromise()
    .then(result => console.log(result))
    .catch(result => console.log(result));*/

module.exports = { resolvedPromise, rejectedPromise }