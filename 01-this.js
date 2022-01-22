
// "this" IN JAVASCRIPT CHANGES DEPENDING ON WHERE IT IS USED.

//----------------------
// IF AN OBJECT'S METHOD CALLS "this" IT'S A REFERENCE TO THE OBJECT.
// method (inside object) -> object

const person = {
    age: 30,
    getAge: function () {
        return this.age
    }
}
// console.log(person.getAge()) // 30



//----------------------
// IF THE FUNCTION IS A CONSTRUCTOR FOR A PROTOTYPE,
// "this" WILL REFER TO THE OBJECT INSTANCE OF "new Person()"
function Person (age) {
    this.age = age
}
const me = new Person(14)
// console.log(me.age)



//----------------------
// A REGULAR "function" (NOT AN ARROW FUNCTION) REFERENCES GLOBAL.
// function -> window FOR BROWSERS
// function -> global FOR NODE

const testThis = function () {
    console.log(this)
}
// testThis() // "global" OR "window" OBJECT IF IN BROWSER

//----------------------
// HOWEVER, IF A FUNCTION IS NOT DECLARED AS A METHOD INSIDE AN
// OBJECT - IT WILL REFERENCE THE "global" OR "window" OBJECT.

// IN THIS UNIQUE CASE WE CAN PASS A SECOND ARGUMENT TO
// "this.drivers.forEach()" WITH "this" TO REFERENCE "car."
// IN OTHER CASES WE WOULD COMBINE "call" "apply" OR "bind"

const car = {
    make: 'Tesla',
    drivers: ['Tom', 'Pat', 'Sue'],
    getDrivers() {
        this.drivers.forEach(function (driver) {
            console.log(driver, this)
        }, this) // ADDED "this" TO REFERENCE "car" INSTANCE.
    }
}
// car.getDrivers()



//----------------------
// "this" IS USED INSIDE DECOUPLED FUNCTIONS THAT REFERENCE
// THE OBJECT INSTANCE WITH "call", "apply" OR "bind"

const employee = {
    firstName: 'Bill',
    lastName: 'Paxton',
    job: 'Actor',
    shoutOut: function () {
        console.log(`His name is ${this.firstName} ${this.lastName}`)
    }
}
const shoutOut = employee.shoutOut.bind(employee)
const employeeDescription = function () {
    console.log(`${this.firstName} ${this.lastName} is an ${this.job}`)
}
// employeeDescription.apply(employee) // CAN ALSO USE "call"
// shoutOut() // USEFUL WHEN YOU NEED BREVITY OR AS A DESIGN PATTERN



//----------------------
// METHOD CHAINING WHERE "this" IS ALWAYS RETURNED.
// HERE IT REFERS TO THE OBJECT OR PROTOTYPE INSTANCE.

const animal = {
    type: 'monkey',
    age: 7,
    getType: function () {
        console.log(this.type)
        return this
    },
    getAge: function () {
        console.log(this.age)
        return this
    }
}
// animal.getAge().getType()



//---------------------------------
// OTHER THAN THAT, "this" APPEARS IN VARIOUS MODERN JS
// LIBRARIES & FRAMEWORKS LIKE REACT AND VUE.
// IN THE CASE OF REACT: "this" REFERS TO AN ES6 CLASS COMPONENT.
// IN THE CASE OF VUE: "this" REFERS TO THE VUE INSTANCE.
