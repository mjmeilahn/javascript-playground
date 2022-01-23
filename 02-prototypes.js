
// ES6 CLASSES ARE SYNTACTIC SUGAR FOR PROTOTYPES.
// YOU CAN STILL EXTEND THE PROTOTYPE AS SHOWN BELOW.
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


//----------------------------------------------
// ES5: BASE "Person" PROTOTYPE & METHODS.
// A PROTOTYPE CAN BE RE-WRITTEN AFTER THE INSTANCE "new Person()"
// LOOKS AT THE PROTOTYPE CHAIN FOR THE LATEST DECLARATION.
// THE PROTOTYPE CAN BE EXTENDED DYNAMICALLY (ANTI-PATTERN) OR
// HARD-CODED ATTRIBUTES, FUNCTIONS, ARRAYS, OBJECTS, CONSTANTS, ETC.
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
// TODO: ES5 & ES6 PRIVATE ATTRIBUTES & METHODS.



//----------------------------------------------
// ES5: PROTOTYPE CHAIN "Employee" FROM "Person"


//----------------------------------------------
// ES5: PROTOTYPE OBJECT