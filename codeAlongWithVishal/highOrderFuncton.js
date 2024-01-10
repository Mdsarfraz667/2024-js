
// multiplyby2

// DRY --> Dont Repeat Yourself 
function copyArrayAndMulBy2(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans.push(2 * arr[i]);
    }
    return ans;
}

// multiplyBy3

function copyArrayAndMulBy3(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans.push(3 * arr[i]);
    }
    return ans;
}

// multiply by 5
function copyArrayAndMulBy5(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans.push(5 * arr[i]);
    }
    return ans;
}


// add 3 in each item of array

function copyArrayAndAdd3(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + 3);
    }
    return res
}

// add 5 to every element of array 

function copyArrayAndAdd5(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + 5)
    }
    return res;
}

function Add3(num) {
    return num + 3;
}
function Add5(num) {
    return num + 5;
}
function Add9(num) {
    return num + 9;
}
function Add11(num) {
    return num + 11;
}



function copyArrayAndManipulate(arr, cb) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(cb(arr[i]));
    }

    return res;
}
let myArray = [2, 3, 4, 5, 6];
let res = copyArrayAndManipulate(myArray, Add11)
console.log(myArray);
console.log(res);
