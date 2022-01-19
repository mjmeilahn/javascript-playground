
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
// METHODS CAN BE RE-WRITTEN AS THE OBJECT INSTACE "new Person()"
// LOOKS AT THE PROTOTYPE CHAIN FOR THE LATEST DECLARATION.
function Person (name) {
    this.name = name
}
Person.prototype.sayName = function () {
    console.log(`My name is ${this.name}.`)
}
const me = new Person('Frank Costanza')
me.sayName()
Person.prototype.sayName = function () {
    console.log('My other name is Art Van De Lay.')
}
me.sayName()


//----------------------------------------------
// ES5: PROTOTYPE CHAIN "Employee" FROM "Person"


//----------------------------------------------
// ES5: PROTOTYPE OBJECT