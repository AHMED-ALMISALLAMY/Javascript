/*
  Comparison Operators
    - ==    Equal
    - !=    Not Equal
    - ===   dentical
    - !==   not dentical
    - > larger than
    - >= larger than or equal
    - < smaller than
    - <= smaller than or equal
*/

console.log(10 == "10");

console.log(10 != "10");

console.log(100 === "100");  // Compare Between Value + Type

console.log(100 !== "100");  // Compare Between Value + Type

console.log(3 > "4");

console.log(4 >= "4");


console.log("Ahmed" === "Almisalamy");  // same type but differnce in value.
console.log(typeof "Ahmed" === typeof "Almisalamy");


/*
  Logical operators
    - ! Not 
    - && And
    - || or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8);

console.log(7 == "7" || 10 > 9 || 3 < 7);


// Control Flow

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "f ";
let student = true;

if (discount === true) {
    price -= discountAmount;
}

// Nesting
else if (country === "Egypt") {
    price = discountAmount + 30;

    if (student)
        price -= discountAmount + 30;
    else
        price -= discountAmount + 10
}

else if (country === "Syria") {
    price -= 50;
}
else
    price -= 10;

console.log(price);


// Conditional Ternary Operator

let theName = "Ahmed";
let theGender = "Male";
let theAge = 16;

if (theGender === "Male")
    console.log("Mr");
else
    console.log("Mrs");

// Condition ? if true : if false

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 13
    ? console.log(12) 
    : theAge > 17 && theAge < 30 
    ? console.log("18 To 29") 
    : theAge > 29 
    ? console("Age Greater Than 29.") 
    : console.log("Unknown!");


// Nullish Coalescing Operator And Logical Or

let Price = null;

console.log(Price || 200);

console.log(Price ?? 200);