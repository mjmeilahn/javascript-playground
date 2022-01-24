
//----------------------------------------------
// ES6 CLASSES ARE SYNTACTIC SUGAR FOR PROTOTYPES.
// YOU CAN STILL EXTEND OR OVERWRITE THE PROTOTYPE AS SHOWN BELOW.
// BROWSERS, LIBRARIES & FRAMEWORKS INTERPRET
// ES6 CLASSES AS PROTOTYPES UNDER THE HOOD.
class Car {
    constructor (make, model, year) {
        this.year = year
        this.make = make
        this.model = model
    }
    details() {
        return `My ${this.make} ${this.model} was made in ${this.year}.`
    }
}
Car.prototype.condition = 'old'
const car = new Car('BMW', '550i', 2020)
// console.log(car.details())
// console.log(car.condition)
// Car.prototype.details = function () {
//     return 'Overwritten prototype method!'
// }
// console.log(car.details())


//----------------------------------------------
// ES5: BASE "Person" PROTOTYPE & METHODS.
// A PROTOTYPE CAN BE RE-WRITTEN AFTER THE INSTANCE "new Person()"
// LOOKS AT THE PROTOTYPE CHAIN FOR THE LATEST DECLARATION.
// THE PROTOTYPE CAN BE EXTENDED DYNAMICALLY (ANTI-PATTERN) OR
// HARD-CODED ATTRIBUTES, FUNCTIONS, ARRAYS, OBJECTS, SYMBOLS, ETC.
function Person (name) {
    this.name = name
}
Person.prototype.sayName = function () {
    console.log(`My name is ${this.name}.`)
}
const me = new Person('George Costanza')
// me.sayName()
Person.prototype.newName = 'Art Van De Lay'
Person.prototype.sayName = function () {
    console.log(`Did I say ${this.name}? I meant ${this.newName}.`)
}
// me.sayName()


//----------------------------------------------
// ES5 & ES6 PRIVATE ATTRIBUTES & METHODS.
// USE VARIABLES FOR PROPERTIES & METHODS THOUGH THEY
// WILL NOT BE BOUND TO THE PROTOTYPE & WILL TAKE UP
// MORE MEMORY. GARBAGE COLLECTED AFTER OBJ IS DESTROYED.
function Dog () {
    let command
    this.bark = function () {
        console.log('bark!')
    }
    const sit = function () {
        command = 'sit!'
        console.log(command)
    }
    this.sitsit = function () {
        return sit()
    }
}
const pet = new Dog()
// pet.bark()
// pet.sit() // WON'T WORK; NOT INTENDED TO WORK
// pet.sitsit()


// IIFE FOR CLOSURES, CROCKFORD DESIGN PATTERN.
const Student = (function () {
    function Student (name) {
        this.getName = function () {
            return name
        }
        const grades = ['A', 'F', 'C', 'B-']
        this.getGrades = function () {
            return grades
        }
    }
    return Student
}())
const classmate = new Student('Ben Stiller')
// console.log(classmate)
// console.log(classmate.getName())
// console.log(classmate.getGrades())

// IN THE ABOVE PATTERN, METHODS ARE ALSO PRIVATE.
// THIS WILL NOT OVERWRITE "getName()"
Student.prototype.getName = function () {
    return 'Jerry Stiller'
}
// console.log(classmate.getName())


class Hotgirl {
    #phoneNumber = '555928883' // FAKE NUMBER DON'T CALL ;)
    askHerNumber() {
        return this.#phoneNumber
    }
    #kiss() {
        return 'Smooch!'
    }
    comfortZone() {
        return this.#kiss()
    }
}
const girl = new Hotgirl()
// console.log(girl.#phoneNumber) // WON'T WORK; NOT INTENDED TO WORK
// console.log(girl.#kiss()) // WON'T WORK; NOT INTENDED TO WORK
console.log(girl.askHerNumber())
console.log(girl.comfortZone())


//----------------------------------------------
// ES5 & ES6 PROTOTYPE CHAIN