"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    talk() {
        console.log('talking');
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Student extends Person {
    constructor(firstName, lastName, subject) {
        super(firstName, lastName);
        this.subject = subject;
    }
    takeTest() {
        console.log(this.firstName + ' is taking a ' + this.subject + ' test.');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Proffesor ' + super.fullName;
    }
}
let wade = new Student('Wade', 'Desir', 'Robotics');
wade.takeTest();
let sam = new Teacher('Samuel', 'Christy');
console.log(sam.fullName);
//# sourceMappingURL=index.js.map