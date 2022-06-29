let myFriends = ['Ahmed','Mohamed','Ali',['yousef','eyad','assem']];

console.log(`Hello ${myFriends[0]}`);
console.log(`The first letter of Ahmed is: ${myFriends[0][0]}`);

// Access on nested array
console.log(`Hello ${myFriends[3][0]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`Hello ${myFriends[3][2]}`);

console.log(`The first letter of assem is: ${myFriends[3][2][0]}`);
console.log(`The second letter of assem is: ${myFriends[3][2][1]}`);

// Change in array values
console.log(myFriends[2]);
myFriends[2] = "Belal";
console.log(myFriends[2]);

console.log(myFriends[3]);
myFriends[3] = ["sameh","mohamed","aymen"];
console.log(myFriends[3]);

console.log(Array.isArray(myFriends));


// Lenght of array
    // index start from 0 [0 , 1 , 2 , 3]
    // lenght start from 1
    
console.log(myFriends.length);    // 4


let myValues = [3,8,9,0,2];
myValues[myValues.length] = 100;   // myValues[5] = 100;
console.log(myValues);


myValues[myValues.length - 1] = 300;   // replace 100 with 300
console.log(myValues);

myValues.unshift(5000 , 7000);     // Inserts new elements at the start of an array
console.log(myValues);

myValues.push("item1" , "item2" , "item3");     // Appends new elements to the end of an array
console.log(myValues);

myValues.pop();     // Removes the last element from an array
console.log(myValues);


// Searching Array

console.log(myFriends.indexOf("Ahmed"));    // Returns the index of the first occurrence of a value in an array
console.log(myFriends.indexOf("Ahmed" , 2));
console.log(myFriends.lastIndexOf("Ahmed"));    // Returns the index of the last occurrence of a specified value in an array

console.log(myFriends.includes("Ahmed"));  
console.log(myFriends.includes("Ahmed" , 1));  


// Sorting Arrays

console.log(myValues.sort());
console.log(myValues.reverse());

console.log(myValues.sort().reverse());


// Slicing Array

console.log(myValues.slice());
console.log(myValues.slice(1));
console.log(myValues.slice(1 , 3));   // start from 1 and not including end.
console.log(myValues.slice(1 , -2));

let objects = ["obj1" , "obj2" , "obj3" , "obj4"];
objects.splice(0 , 0 , "item5");
console.log(objects);

objects.splice(0 , 2 , "item5");
console.log(objects);



// Joining Arrays

let objects1 = ["obj1" , "obj2" , "obj3" , "obj4"];
let objects2 = ["obj5" , "obj6" , "obj7" , "obj8"];
let objects3 = ["obj9" , "obj10" , "obj11" , "obj12"];


let allObjects = objects1.concat(objects2 , objects3 , "item100" , ["item101" , "item103"]);
console.log(allObjects);


console.log(allObjects.join());
console.log(allObjects.join(""));
console.log(allObjects.join(" @ "));
console.log(allObjects.join("|").toUpperCase());
console.log(allObjects.join(" - "));