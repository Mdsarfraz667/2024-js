
// value vs Refrence
// primitives pass values

let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);

// structural types use reference

let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
// both xArray and yArry are gonna be changed bcz array uses refrences in memory 
console.log(xArray, yArray);


// Mutable vs Immutable

// primitives are immutable in js
let myName = "Dave";
// string are immutable bcz string are primitve type
myName[0] = 'Z'; // dude you expect it will ve print Zave but it log Dave
console.log(myName);

// think about this
myName = "David"
console.log(myName); // its gonna be print David but why ?

//  here we are re-assiginig myName not mutating 


// hold on dude what you have learned yet primtive are immutable and structure are mutatable 
// look at yArray Above

// so we can mutate structure data types 
yArray[0] = 9;
console.log(yArray);



