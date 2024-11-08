(function () {
    'use strict';
    // function Person(first, last, age) {
    //     this.first = first;
    //     this.last = last;
    //     this.age = age;
    //     this.toString = function(){console.log(`${this.first} ${this.last} ${this.age}`);};


    // }

    // function Student(first, last, age, grade) {
    //     let student = Object.create(new Person(first, last, age));
    //     student.grade = grade;
    //     student.toString=function(){console.log(`${super.toString()} ${this.grade}`);};
    //     return student;
    // }

    //     const s1 = new Student("azriel", "jurkasnky", 25, 100);
    //     console.log(s1);
    //     s1.toString();


    class Person {
        constructor(first, last, age) {
            this.first = first;
            this.last = last;
            this.age = age;

        }



        toString() {
            console.log(`${this.first} ${this.last} ${this.age}`);
            
        }


    }

    class Student extends Person {
        constructor(first, last, age, grade) {
            super(first, last, age);
            this.grade = grade;

        }


        toString() {


            console.log(`${super.toString()} ${this.grade}`);
            //super.toString();
        }

    }

    const s1 = new Student("azriel", "jurkasnky", 25, 100);
    //console.log(s1);
    s1.toString();
   





}());