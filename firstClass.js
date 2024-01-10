
// a(); it will run successfulyy
// b(); b is undefined it will give you error

// console.log(a);
// console.log(b);


// during the memory creation phase a is holding function as value 
// function Statement and function declartion are same
function a() {
    console.log("a called");
}
// a();

// note : 1 we can assign function into variable in javascript
// function acts like a value

// function Expression

//  in function expression this b is treated like any other variable intially its have undifined value untill the code hit this line itself 
var b = function () {
    console.log("b called");
}
// b();

// difference between function statement and function expression is hoisting
// 

// ******* Anonymous ***

// function (){

// }

// anonymous function are used in place where function are used as value

//  we can assign anonymous function as value

//  we can assign it to any variable

// 


// ************* 

// var b = function xyz() {
//     console.log("xyz");
//     // xyz(); we can access the xyz( function here but we can not access outside the body)
// }

// b();
// xyz(); 


var b = function (param1, param2) {
    // this is local varible in this function scope
    // we can not access param1 and param2 outside 
    console.log(param1, param2);
}


// The value which are passed inside the function is know as argument
// b(2, 3);

// first class function in js

// pass function inside another function 

var test = function (param1) {
    console.log(param1);

    param1();

    return function () {
        console.log("Returning inside function through another function");
    }
}
// look at this we are passing xyz function as an arguments 
// test(function xyz() {

// });

// function t() {
//     console.log("tt");
// }
// test(t)

// test(() => {
//     console.log("Anonoymous function");
// })

// var func = test(() => {
//     console.log("Anonoymous function");
// })

// console.log(func);
// func();

// declaring a function with one parametere
var b = function (param) {
    console.log(param);
}
// b(); invoking without passing a argument it will no throw any error param will get undefined value
// b(2); during invoking time we are passing 2 as an argument hence parms will be set to 2


// *********** FIRST CLASS FUNCTION ********

//  in js function are treated as first class citizen
// ability to use like a values means pass function inside another function returns function from and assignito to a variable all these things make function as a first class citizen
