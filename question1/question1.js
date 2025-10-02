'use strict';

function lowerCaseWords(mixedArray) {
    return new Promise(function(resolve, reject) {
        const filteredArray = mixedArray.filter(el => typeof el === "string");
        const lowerCase = filteredArray.map(el => el.toLowerCase());
        if(lowerCase.length > 0) {
            resolve(lowerCase);
        } else {
            reject("The array did not contain any strings")
        }
    });
}
const mixedArray = ["PIZZA", 10, true, 25, false, "WINGS"];

/*lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));*/

module.exports = { lowerCaseWords };