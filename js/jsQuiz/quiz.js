"use strict";
const ourArray =[10,20,30];
function ourMap(array ,clb){
    let results= [];
    for (let index = 0; index < array.length; index++) {

        // SL - not a problem but could combine these two lines into simply - results.push(clb(array[index]))
        // also foreach wuld have been nice..
        const element = clb(array[index]);
        results.push(element);


    }
    return results;
}

function doubleIt(number) {
    return number*2;


}
function tripleIt(number) {
    return number*3;


}

console.log(ourMap(ourArray,tripleIt), ourArray);

// SL - nice!
// SL - grade - 93
