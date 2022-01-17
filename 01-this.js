
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
// IN OTHER CASES WE WOULD USE "call" "apply" OR "bind"

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
// METHOD CHAINING CAN BE ACCOMPLISHED ON AN OBJECT SIMPLY
// BY ALWAYS RETURNING "this" AFTER EACH METHOD.

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


