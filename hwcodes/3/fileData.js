const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if (!path) throw "You must provide a path";
    const result =  await fs.readFileAsync(path, "utf-8");
    //console.log(result);
    return result;
}

async function getFileAsJSON(path) {
    if (!path) throw "You must provide a path";
    return await getFileAsString(path).then(function(data) {
        return JSON.parse(data);
    })
}

async function saveStringToFile(path, text) {
    if (!path) throw "You must provide a path";
    if (typeof text !== "string") throw "You must provide string";
    return await fs.writeFileAsync(path, text);
}

async function saveJSONToFile(path, obj) {
    if (!path) throw "You must provide a path";
    if (!obj) throw "You must provide a obj";
    if (typeof obj !== "object") throw "You must provide a obj";
    return await fs.writeFileAsync(path, JSON.stringify(obj, null, 4));
}

module.exports = {getFileAsJSON, getFileAsString, saveJSONToFile, saveStringToFile}

saveStringToFile("/Users/robin/Desktop/CS546/CS-546-master/Old/lecture_03_old/stringTest.txt","This is valid input!");
saveJSONToFile("/Users/robin/Desktop/CS546/CS-546-master/Old/lecture_03_old/jsonTest.json",{"foo":"bar","thisIs":"an object"})