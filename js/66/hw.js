"use strict";
function ourEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback[array[i]]) {
            
            return false;

        }

    }
    return true;

}
function ourSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback[array[i]]) {
            
            return true;

        }
    }
    return false;
}


const upper = ["A", "B", "C"];

const lower = ["a", "b", "c"];
const mixed = ["a", "B", "c"];

function isUpper(letter) {
    return letter === letter.toUpperCase();
}
console.log(ourEvery(upper, isUpper));
console.log(ourEvery(lower, isUpper));
ourSome(mixed, isUpper);
console.log(ourSome(lower, isUpper));

//console.log(isUpper("HI"));