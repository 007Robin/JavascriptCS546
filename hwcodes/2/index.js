const myapp1 = require("./geometry");
const myapp2 = require("./utilities");
//geometry_method_1
let volumeOfRectangularPrism = myapp1.volumeOfRectangularPrism(1, 2, 3);
console.log(`The volume of RectangularPrism is ${volumeOfRectangularPrism}`);
let volumeOfRectangularPrism1 = myapp1.volumeOfRectangularPrism(5, 2, 3);
console.log(`The volume of RectangularPrism is ${volumeOfRectangularPrism1}`);
let volumeOfRectangularPrism2 = myapp1.volumeOfRectangularPrism(1, 10, 3);
console.log(`The volume of RectangularPrism is ${volumeOfRectangularPrism2}`);
let volumeOfRectangularPrism3 = myapp1.volumeOfRectangularPrism(11, 1, 3);
console.log(`The volume of RectangularPrism is ${volumeOfRectangularPrism3}`);
let volumeOfRectangularPrism4 = myapp1.volumeOfRectangularPrism(1, 1, 1);
console.log(`The volume of RectangularPrism is ${volumeOfRectangularPrism4}`);


//geometry_method_2
let surfaceAreaOfRectangularPrism = myapp1.surfaceAreaOfRectangularPrism(1, 2, 3);
console.log(`The surface area of RectangularPrism is ${surfaceAreaOfRectangularPrism}`);
let surfaceAreaOfRectangularPrism1 = myapp1.surfaceAreaOfRectangularPrism(1.1, 2, 3);
console.log(`The surface area of RectangularPrism is ${surfaceAreaOfRectangularPrism1}`);
let surfaceAreaOfRectangularPrism2 = myapp1.surfaceAreaOfRectangularPrism(1, 2.2, 3);
console.log(`The surface area of RectangularPrism is ${surfaceAreaOfRectangularPrism2}`);
let surfaceAreaOfRectangularPrism3 = myapp1.surfaceAreaOfRectangularPrism(1, 2, 13);
console.log(`The surface area of RectangularPrism is ${surfaceAreaOfRectangularPrism3}`);
let surfaceAreaOfRectangularPrism4 = myapp1.surfaceAreaOfRectangularPrism(1, 1, 1);
console.log(`The surface area of RectangularPrism is ${surfaceAreaOfRectangularPrism4}`);

//geometry_method_3
let volumeOfSphere = myapp1.volumeOfSphere(1);
console.log(`The volume of sphere is ${volumeOfSphere}`);
let volumeOfSphere1 = myapp1.volumeOfSphere(2);
console.log(`The volume of sphere is ${volumeOfSphere1}`);
let volumeOfSphere2 = myapp1.volumeOfSphere(3);
console.log(`The volume of sphere is ${volumeOfSphere2}`);
let volumeOfSphere3 = myapp1.volumeOfSphere(4.2);
console.log(`The volume of sphere is ${volumeOfSphere3}`);
let volumeOfSphere4 = myapp1.volumeOfSphere(1.1);
console.log(`The volume of sphere is ${volumeOfSphere4}`);

//geometry_method_4
let surfaceAreaOfSphere = myapp1.surfaceAreaOfSphere(1);
console.log(`The surface of sphere is ${surfaceAreaOfSphere}`);
let surfaceAreaOfSphere1 = myapp1.surfaceAreaOfSphere(2);
console.log(`The surface of sphere is ${surfaceAreaOfSphere1}`);
let surfaceAreaOfSphere2 = myapp1.surfaceAreaOfSphere(3);
console.log(`The surface of sphere is ${surfaceAreaOfSphere2}`);
let surfaceAreaOfSphere3 = myapp1.surfaceAreaOfSphere(4.2);
console.log(`The surface of sphere is ${surfaceAreaOfSphere3}`);
let surfaceAreaOfSphere4 = myapp1.surfaceAreaOfSphere(1.2);
console.log(`The surface of sphere is ${surfaceAreaOfSphere4}`);

//utilities_method_1
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const fourth = {};
const fifth = {a: 2, c: 3};
console.log(myapp2.deepEquality(first, second)); // false
console.log(myapp2.deepEquality(first, third)); // true
console.log(myapp2.deepEquality(first, fourth)); // false
console.log(myapp2.deepEquality(fourth, fourth)); // true
console.log(myapp2.deepEquality(first, fifth)); // false


//utilities_method_2
const testArr = ["a", "a", "b", "a", "b", "c"];
console.log(myapp2.uniqueElements(testArr)); // outputs 3
const testArr1 = ["a", "cb", "b", "a", "b", "c"];
console.log(myapp2.uniqueElements(testArr1)); // outputs 4
const testArr2 = ["a", "a", "b", "a", "b"];
console.log(myapp2.uniqueElements(testArr2)); // outputs 2
const testArr3 = ["a", "a", "b", "a", "", "c"];
console.log(myapp2.uniqueElements(testArr3)); // outputs 4
const testArr4 = ["a", "a", "b", "e", "b", "c"];
console.log(myapp2.uniqueElements(testArr4)); // outputs 4

//utilities_method_3
const test = "Hello, the pie is in the oven";
const charMap = myapp2.countOfEachCharacterInString(test);
for(var x of charMap) {
    console.log(x[0] + " : " + x[1]);
}
const test1 = "Hello";
const charMap1 = myapp2.countOfEachCharacterInString(test1);
for(var x of charMap1) {
    console.log(x[0] + " : " + x[1]);
}
const test2 = "in the oven";
const charMap2 = myapp2.countOfEachCharacterInString(test2);
for(var x of charMap2) {
    console.log(x[0] + " : " + x[1]);
}
const test3 = "12345612340-=1";
const charMap3 = myapp2.countOfEachCharacterInString(test3);
for(var x of charMap3) {
    console.log(x[0] + " : " + x[1]);
}
const test4 = "throw err";
const charMap4 = myapp2.countOfEachCharacterInString(test4);
for(var x of charMap4) {
    console.log(x[0] + " : " + x[1]);
}
