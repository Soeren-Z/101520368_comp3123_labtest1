'use strict';

const { lowerCaseWords } = require("./question1/question1");
const { resolvedPromise, rejectedPromise } = require("./question2/question2");
const {createLogFiles, removeLogFiles } = require("./question3/question3");

async function runLabTest() {
    console.log("\nQuestion 1\n");
    const mixedArray = ["PIZZA", 10, true, 25, false, "WINGS"];
    try {
        await lowerCaseWords(mixedArray)
            .then(result => console.log(result))
            .catch(error => console.log(error));
    } catch (e) {
        console.log(e);
    }
    console.log("\nQuestion 2\n");
    try {
        await resolvedPromise()
            .then(result => console.log(result))
            .catch(result => console.log(result));

        await rejectedPromise()
            .then(result => console.log(result))
            .catch(result => console.log(result));
    } catch (e) {
        console.log(e);
    }
    console.log("\nQuestion 3\n");
    try {
        createLogFiles();
        removeLogFiles();
    } catch (e) {
        console.log(e);
    }
}

runLabTest();