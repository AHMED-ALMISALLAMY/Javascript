console.log("Welcome To Javascript");

/* DataTypes
- string
- number
- bool
- Array => Object
*/


console.log(typeof("Hi"));  // string

console.log(typeof(7));   // number
console.log(typeof(7.9));   // number

console.log(typeof(true));  // bool

console.log( typeof [7,9,3]);   // Object
console.log( typeof ["Ahmed","Ah","Sa"]);   // Object

console.log( typeof {name: "Ahmed" , age: 16 , country: "EGY"} );   // object


console.log( typeof undefined);   // undefined


console.log( typeof null );   // null



// ----------- Variables -----------

// syntax => (keyword -> var | Variable name);

var name = "Ahmed";
var age = 16;

console.log(age);


// var Added To Window Object


// ------ Template Literals ------

let title = "Title";
let parag = "Paragraph";


let markUp = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${parag}</p>
        </div>
    </div>
`;

document.write(markUp);



// -------- Challenge --------

var theTitle , theDiscription , theDate;
theTitle = "Elzero";
theDiscription = "Elzero Web School";
theDate = "10/3";

var Data = `
    <div class="card">
        <h3>${theTitle}</h3>
        <p>${theDiscription}</p>
        <span>${theDate}</span>
    </div>
`
document.write(Data.repeat(4));