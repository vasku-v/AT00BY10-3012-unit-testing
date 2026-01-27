// Main program to confirm that mylib.js is working

const mylib = require("./src/mylib");

console.log("1 + 2 =", mylib.add(1, 2));
console.log("6 - 4 =", mylib.subtract(6, 4));
console.log("2 * 3 =", mylib.multiply(2, 3));
console.log("18 / 6 =", mylib.divide(18, 6));
console.log("10 // 2 =", mylib.isEven(10));
