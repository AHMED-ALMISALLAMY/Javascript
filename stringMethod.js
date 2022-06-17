/*
  String Methods
    - Access With Index
    - Access With CharAt()
    - lenght
    - trim()
    - toUpperCase
    - toLowerCase
    - Chain Methods
*/

let theName = "Ahmed";

console.log(theName);

console.log(theName[1]);    // h
console.log(theName.charAt(1));    // h 

console.log(theName.length);    // 5

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim());    // Remove Spaces.

// Chain Methods
console.log(theName.trim().charAt(2).toUpperCase());


// ----------------------------------------


/*
  String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], Start [Opt] lenght)
    - slice(Start [Mand], End [Opt] Not including End)
    - repeat(Times) [ES6]
    - split(Separator[Opt], Limit [Opt])
*/

let Name = "Ahmed Almisalamy"; 

console.log(Name.indexOf("Almisalamy"));     // 6
console.log(Name.indexOf("Almisalamy" , 7));   // -1
console.log(Name.lastIndexOf("y"));  // 15

console.log(Name.slice(0)); 
console.log(Name.slice(0 , 5));  
console.log(Name.slice(-9)); 

console.log(Name.repeat(3));

let Name2 = "Ahmed - Almisalamy"; 
console.log(Name2.split("-"));
console.log(Name2.split("" , 6));
console.log(Name2.split(" "));  // Split the spaces


// ----------------------------------------

let Name3 = "Ahmed Almisalamy";

console.log(Name3.substring(2,5))   // Start Index: 2 , End: 5 

console.log(Name3.substring(Name3.length - 1));  


console.log(Name3.substr(0 , 5));

console.log(Name3.includes("Ahmed"));

console.log(Name3.includes("Ahmed" , 5)); 


console.log(Name3.startsWith("A"));
console.log(Name3.endsWith("d" , 6));  // index 6 End With "d" Or Not?