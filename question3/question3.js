'use strict';

const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "logs");

function removeLogFiles() {
    if(fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            console.log(`deleting files...${file}`);
            fs.unlinkSync(filePath);
        })
    } else {
        console.log("The logs directory doesn't exist");
    }
}

function createLogFiles () {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    process.chdir(dir);
    for(let i = 0; i < 10; i++) {
        const filename = `logs${i}.txt`;
        fs.writeFileSync(filename, `filename`);
        console.log(filename);
    }
}

/*createLogFiles();
removeLogFiles();*/

module.exports = { removeLogFiles, createLogFiles }