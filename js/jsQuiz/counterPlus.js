"use strict";


const counter1=window.app.counterCreator();
const counter2=window.app.counterCreator();
for (let index = 0; index < 15; index++) {
    counter1.increment();
    
};
for (let index = 0; index < 5 ;index++) {
    counter2.increment();
    
};
for (let index = 0; index < 10;index++) {
    window.app.counter.increment();
    
}
console.log(window.app.counter.getAmount());
counter1.getAmount();
counter2.getAmount(); 