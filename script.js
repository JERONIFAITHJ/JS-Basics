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

// Object is a collection of key value pairs
const obj = { name: 'Baskar', age: 21 };
const obj1 = { 'name': 'Jero' }

const allDataTypesObj = {
    firstName: 'Baskar',
    age: 40,
    gpa: 8.0,
    marks: [100,90,100,90,80],
    address: {
        flatNo: 21,
        flatName: 'Ramco'
    },
    married: false,
    fullName(secondName){
        this.name = this.firstName + " " + secondName;
        return this.name;
    }
}

console.log(obj.name, obj1['name']);    //  Object values can either be accessed by using (.)dot operator or ([])square brackets
allDataTypesObj.js = 'fresher'; // To add an extra key value pair
allDataTypesObj.age = 20;

console.log(allDataTypesObj);
console.log(allDataTypesObj.fullName('Pandian'));

// Call Stack, Heap

// Call Stack -- where javascript engine executes the js code
// Stack definition - Last In First Out (LIFO)
// JS executes in two phases -- 1. Creation Phase 2. Execution phase
// Primitive data types memory -- Call Stack  (stack can identify the changes occured in primitive types)
// Non Primitive data types reference -- Call Stack (reference stays the same, data may change inside heap)

// Heap (Stores arrays, functions, objects)

// Copying values

// Primitive
const copy1 = 50;
const copy2 = copy1;
console.log(copy1);

// Non primitive
const copyObj1 = { age: 21 };       //    copyObj1 --> heap: {age: 21} <-- copyObj2
console.log(copyObj1);
const copyObj2 = copyObj1;
copyObj2.age = 50;
console.log(copyObj1);

// Ternary operator (?:)
let myAge = 21;
let canVote = myAge > 18 ? 'You can vote' : 'You cannot vote';

// Template literal (``)
let myName = 'Baskar';
console.log(`My name is ${myName} and ${myAge > 18 ? 'I can vote' : 'I cannot vote'}`);

// Loops
// For loop
for(let i = 0; i < 3; i++){
    console.log(`From regular for loop ${i}`);
}

// For of loop
for(let i of arr){
    console.log('From for of loop',i);
}
// ERROR for(let i of obj){
//     console.log('From for of loop',i);
// }

// For in loop
for(let i in arr){
    console.log(i);
}
for(let i in obj){
    console.log(i);
}