
// "this" IN JAVASCRIPT CHANGES DEPENDING ON WHERE IT IS USED.

// IF AN OBJECT'S METHOD CALLS "this" IT'S A REFERENCE TO THE OBJECT.
// method -> object

const person = {
    age: 30,
    getAge: function () {
        return this.age
    }
}
// console.log(person.getAge()) // 30

// A REGULAR "function" (NOT AN ARROW FUNCTION) REFERENCES GLOBAL.
// function -> window FOR BROWSERS
// function -> global FOR NODE

const testThis = function () {
    console.log(this)
}
// testThis() // "global" OR "window" OBJECT IF IN BROWSER


// HOWEVER, IF A FUNCTION IS NOT DECLARED AS A METHOD INSIDE AN
// OBJECT - IT WILL REFERENCE THE "global" OR "window" OBJECT.

const car = {
    make: 'Tesla',
    drivers: ['Cat', 'Dog', 'Monkey'],
    getDrivers() {
        this.drivers.forEach(function (driver) {
            console.log(driver, this)
        }, this) // ADDED "this" TO REFERENCE "car" INSTANCE.
    }
}
// car.getDrivers() // "global" OR "window" OBJECT IF IN BROWSER.
// IN THIS UNIQUE CASE WE CAN PASS A SECOND ARGUMENT TO
// "this.drivers.forEach()" WITH "this" TO REFERENCE "car."
// IN OTHER CASES WE WOULD USE "call" "apply" OR "bind"