
const str = 'This is a short, but fun sentence'
const numbers = [1,2,3,4,5]
const fruits = ['apple', 'orange', 'banana', 'blueberry']
const obj = {
    a: 1,
    s: 'This is a string on an object',
    sayHello: function () {
        console.log('hello')
    },
    getA: function () {
        return this.a
    }
}

// "map" POLYFILL ON ARRAY PROTOTYPE
Array.prototype.list = function(fn, index, arr) {
    console.log(arguments)
    const newArray = []
    for (const i in this) {
        if (typeof this[i] !== 'function') newArray.push(this[i])
    }
    return newArray
}
numbers.list((n, i, a) => console.log(n, i, a))

// "filter" POLYFILL ON ARRAY PROTOTYPE

// "every" POLYFILL ON ARRAY PROTOTYPE

// "sort" POLYFILL ON ARRAY PROTOTYPE

// "reduce" POLYFILL ON ARRAY PROTOTYPE



