"use strict";
function ourEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback[array[i]]) {
            console.log("false");
            return;

        }

    }
    console.log("true");

}
function ourSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback[array[i]]) {
            console.log("true");
            return;

        }
    }
    console.log("false");
}


const upper = ["A", "B", "C"];

const lower = ["a", "b", "c"];
const mixed = ["a", "B", "c"];

function isUpper(letter) {
    return letter === letter.toUpperCase();
}
ourEvery(upper, isUpper);
ourEvery(lower, isUpper);
ourSome(mixed, isUpper);
ourSome(lower, isUpper);

console.log(isUpper("HI"));