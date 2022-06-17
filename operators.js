console.log(10 - "Ahmed");

console.log(10 % 2);

console.log( 2 ** 2 );


console.log( typeof NaN );


// Type Casting
let a = "10";
let b = 20;
let c = true;

console.log(a + b);
console.log(+a + b);

console.log(b - a);

console.log(b + c);   // 21

console.log(a + b + c);   // 1020true

console.log(+a + b + c);      // 31


// Assigment Operators
let x = 20;
x = x + 10;
x += 30;


// Number methods

/*
    Number Methods
    - Two Dots To Call A Methods
    - toString()
    - toFind() 
    - parseInt()
    - parseFloat()
    - isInteger()
    - isNan()
*/


// toString
var stringName = (100).toString()
console.log( typeof stringName );   // string

// toFixed
console.log( 100.555555.toFixed(3) );  // It will return 3 numbers after the point.

// toFind
console.log(  );

// parseInt
console.log( parseInt("100 Ahmed") );  // A string to convert into a number.
console.log( (+"100 Ahmed") );  // NaN
console.log( Number("100 Ahmed") ); // NaN
console.log( parseInt("100.7") );

// parseFloat
console.log( parseFloat("190.7") );  // Converts a string to a floating-point number

// isInteger
console.log( Number.isInteger(100) );   // true

// isNan
console.log( Number.isNaN(100) );   // false

// Math Object

/*
  Math Object
    - round()
    - ceil()
    - floor()
    - min()
    - max()
    - pow()
    - random()
    - trunc() [ES6]
*/

console.log(Math.round(99.3));  // 99
console.log(Math.round(99.5));   // 100

console.log(Math.ceil(99.3)); // 100  increase the number.
console.log(Math.floor(99.7));  // 99  decrease the number.


console.log(Math.min(10 , 20 , 30 , 7 , 88 , 99 , 120 , 190));
console.log(Math.max(10 , 20 , 30 , 7 , 88 , 99 , 120 , 190));

console.log(Math.pow(4 , 2));   // 16

console.log(Math.random());

console.log(Math.trunc(99.5));  // Returns the integral part of the a numeric expression, removing any fractional digits


