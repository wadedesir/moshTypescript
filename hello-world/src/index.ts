// type Person = {
//     name: string,
//     age: number
// }

// let wade: Person = {
//     name: 'Wade',
//     age: 22
// }


// function fun(thing: string | Person): string{
//     if(typeof thing === 'string'){
//         return thing
//     }else{
//         return thing.name
//     }
// }

// console.log(fun(wade))

// type Users = {
//     name: string,
//     age: number,
//     occupation?: 'string'
// }

// let animals = Bird | fish;

// enum Days {Monday, Tuesday, Wednesday, Thursday, Friday}

// let day: Days = Days.Monday

// let user = getUser();
// console.log(user?.address?.street)

// let x = foo ?? bar()

// class Account {
//     id: number
//     name: string
//     balance: number

//     constructor(id: number, name: string, balance: number){
//         this.id = id;
//         this.name = name;
//         this.balance = balance;
//     }

//     deposit(amount: number): void{
//         if(amount <= 0)
//             throw new Error('invalid amount')
//         this.balance += amount
//     }
// }

// class Jack {}

// let chime = new Account(1, 'Wade', 0)
// chime.deposit(5000)
// console.log(chime)
// console.log(chime instanceof Jack)

// class Person{
//     constructor(public firstName: string, public lastName: string){

//     }

//     talk(){
//         console.log('talking')
//     }

//     get fullName(){
//         return this.firstName + ' ' + this.lastName
//     }


// }

// class Student extends Person {
//     constructor(firstName: string,lastName: string, public subject: string){
//         super(firstName, lastName)
//     }
//     takeTest(){
//         console.log(this.firstName + ' is taking a ' + this.subject + ' test.')
//     }
// }

// class Teacher extends Person{

//     override get fullName(){
//         return 'Proffesor ' + super.fullName
//     }
// }

// let wade = new Student('Wade', 'Desir', 'Robotics')
// wade.takeTest()

// let sam = new Teacher('Samuel', 'Christy')

// console.log(sam.fullName)


//////////Exercises for: Classes, Interfaces, and object-oriented programming
class Logger{
    constructor(public fileName: string){

    }

    writeToFile(){
        console.log('writing to logfile for: ' + this.fileName)
    }
}

class Person {
    constructor(public firstName: string, public lastName: string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName
    }
}

class Employee extends Person {
    constructor(public salary: number, firstName: string, lastName: string){
        super(firstName, lastName)
    }
}

// The difference between private and protected members is that private cannot be inherited while protected members can but just can't be modified

//Given the data below, define an interface for representing employees: -got this wrong
// interface Employee {
//     name: string,
//     salary: number, 
//     address: {
//         street: string,
//         city: string,
//         zipCode: number
//     }
// }

// right answer: 

interface Address {
    street: string,
    city: string,
    zipCode: number
}

interface Emplyee {
    name: string,
    salary: string,
    address: Address
}






