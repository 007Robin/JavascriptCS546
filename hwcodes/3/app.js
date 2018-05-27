const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
const changetext = require("./textMetrics");
const fileoperation = require("./fileData");

async function test() {
    fs.exists("chapter1.result.json", function(exists) {
        if(exists) {
            let dothings = fileoperation.getFileAsJSON("chapter1.result.json")
            .then(function (data) {
                console.log("chapter1.result.json exsit");
                console.log(data);
            },(error) => {
                console.log(error);
            });
        }
        else {
            //If no result is found, perform getFileAsString(chapter1.txt)
            let step1 = fileoperation.getFileAsString("chapter1.txt")
            .then( function(data) {
                //simplify the text
               return changetext.simplify(data);
            })
            .then(function(data) {
                //store the result in chapter1.debug.txt
                return fileoperation.saveStringToFile("chapter1.debug.txt", data);
            })
      
            let step2 = fileoperation.getFileAsString("chapter1.txt")
            .then(function(data) {
                //Run the text metrics
                return changetext.createMetrics(data);
            })
            .then(function (data) {
                //store those results in chapter1.result.json
                //Print the resulting metrics
                console.log(data);
                return fileoperation.saveJSONToFile("chapter1.result.json", data)
            },(error) => {
                console.log(error);
            });
        }
    });   

    fs.exists("chapter2.result.json", function(exists) {
        if(exists) {
            let dothings = fileoperation.getFileAsJSON("chapter2.result.json")
            .then(function (data) {
                console.log("chapter2.result.json exsit");
                console.log(data);
            })
        }
        else {
            //If no result is found, perform getFileAsString(chapter1.txt)
            let step1 = fileoperation.getFileAsString("chapter2.txt")
            .then( function(data) {
                //simplify the text
               return changetext.simplify(data);
            })
            .then(function(data) {
                //store the result in chapter1.debug.txt
                return fileoperation.saveStringToFile("chapter2.debug.txt", data);
            })
            
            let step2 = fileoperation.getFileAsString("chapter2.txt")
            .then(function(data) {
                //Run the text metrics
                return changetext.createMetrics(data);
            })
            .then(function (data) {
                //store those results in chapter1.result.json
                //Print the resulting metrics
                console.log(data);
                return fileoperation.saveJSONToFile("chapter2.result.json", data)
            },(error) => {
                console.log(error);
            });
        }
    });   


    fs.exists("chapter3.result.json", function(exists) {
        if(exists) {
            let dothings = fileoperation.getFileAsJSON("chapter3.result.json")
            .then(function (data) {
                console.log("chapter3.result.json exsit");
                console.log(data);
            })
        }
        else {
            //If no result is found, perform getFileAsString(chapter1.txt)
            let step1 = fileoperation.getFileAsString("chapter3.txt")
            .then( function(data) {
                //simplify the text
               return changetext.simplify(data);
            })
            .then(function(data) {
                //store the result in chapter1.debug.txt
                return fileoperation.saveStringToFile("chapter3.debug.txt", data);
            })
            
            let step2 = fileoperation.getFileAsString("chapter3.txt")
            .then(function(data) {
                //Run the text metrics
                return changetext.createMetrics(data);
            })
            .then(function (data) {
                //store those results in chapter1.result.json
                //Print the resulting metrics
                console.log(data);
                return fileoperation.saveJSONToFile("chapter3.result.json", data)
            },(error) => {
                console.log(error);
            });
        }
    });   
}
test().catch(error => {
    console.log(error);
});
