// Datatypes -- Primitive and Non-Primitive

// Primitive -- numbers, boolean, string, null, undefined, NaN
// Non-Primitive -- Arrays, Functions, Objects -- Points to object in JS

// JS is a loosely typed language. JS handles the memory allocation for us
// Numbers -- -10, 10, 10.1, 10.22222222
// Boolean -- true, false
// String -- 'Group/String of characters' "Group/String of characters"
// null -- unoccupied space (developer provides the value)
// undefined -- unoccupied space
// NaN -- 10/10 = 1, 'Jero'/10 = NaN

// Java -- int, float, double, boolean, string
// JS -- var, let, const

// DO NOT USE THIS TYPE var a = 10;

let a;  // Variable Declaration
let b = 20; // Variable Initialization
b = 50; // Re assigning
const c = 30;
// ERROR Constant value cannot be re-assigned - c = 100;

console.log("Jeroni", b);

// NON PRIMITIVE
// Arrays, Functions, Objects

// Collection of values of similar or different datatypes
const arr = [1, 2, 3, 4, 'Jero', { name: 'Jero' }]
console.log(arr);

// Object is a collection of key value pairs
const obj = { name: 'Baskar', age: 21 };
console.log(obj);

// Anonymous function
(() => {
    console.log('hello world');
})();

let val1 = 10;
let val2 = 20;

// TYPE 1 - Function
function add(x, y) {
    let c = x + y;
    console.log(c);
}
add(val1, val2); //Function calling

// TYPE 2 - Function 
const sub = function (x, y) {
    let c = x - y;
    console.log(c);
}
sub(val1, val2);
let subt = sub;  // You can assign this value to another variable
console.log(subt);

// TYPE 3 -Arrow functions
const mul = (x, y) => {
    let c = x * y;
    console.log(c);
}
mul(val1,val2);


function type1Function(){
    return 'baskar';
}
const type2Fn = function(){
    return 'jeroni'
}

// TYPE 3 is the most used format
const type3Fn1 = () => 'type 3 return';
const type3Fn2 = name => {
    return name
}
const type3Fn3 = (name, age) => {
    return name
}
console.log(type1Function(), type2Fn(), type3Fn1(), type3Fn2('JERONI'));