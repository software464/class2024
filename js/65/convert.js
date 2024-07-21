"use strict";
function convertCtoF(x) {

    return ((x / 5) * 9) + 32;
}
function convertCtoF(x) {

    return ((x - 32) * 5) / 9;
}
console.log(convertCtoF(100));
console.log(convertCtoF(45));
let input = prompt("please enter number to be converted celsius");
alert(convertCtoF(input));


