let name = "Hitesh";
let score = 59;
let isPlayer = true;
let CSK = Symbol("--CSK--");
let age = undefined;
let family = null;

// console.log(typeof name);
// console.log(typeof score);
// console.log(typeof isPlayer);
// console.log(CSK);


let stringToNumber = Number(name);
let stringToBoolean = Boolean(name);
// let nameValueInBigInt = BigInt(name); // throws a syntax error
let stringToSymbol = Symbol(name);
// console.log(stringToNumber + " type -> " + typeof stringToNumber);
// console.log(stringToBoolean + " type -> " + typeof stringToBoolean);
// console.log(stringToSymbol + " type -> " + typeof stringToSymbol);

let numberToString = String(score);
let numberToBoolean = Boolean(score);
let numberToBigInt = BigInt(score);
let numberToSymbol = Symbol(score);
// console.log(numberToString + " type -> " + typeof numberToString);
// console.log(numberToString + " type -> " + typeof numberToBoolean);
// console.log(numberToBigInt + " type -> " + typeof numberToBigInt);
// console.log(numberToSymbol + " type -> " + typeof numberToSymbol); // TypeError: Cannot convert a Symbol value to a string


// ++++++++++++++++++++++++++++++++++++++++++++++++ Operations ++++++++++++++++++++++++++++++++++++++++++++==

let value= 5;
let negOfValue = -value;
// console.log(negOfValue + " type -> " + typeof negOfValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str = "2";
let num = 2;
// // #case-1
// console.log(str + num); //string
// console.log(typeof(str + num)); //string

// // #case-2
// console.log(num + str); //22
// console.log(typeof(num + str)); //string

// // #case-3
// console.log(num + num); //4
// console.log(typeof(num + num)); //string

// // #case-4
// console.log(str + str); //22
// console.log(typeof(str + str)); //string

// // #case-5
// console.log(str + num + num); //222
// console.log(typeof(str + num + num)); //string

// // #case-6
// console.log(num + num + str); //42
// console.log(typeof(num + num + str)); //string

// // #case-7
// console.log(num + num + str + num + num); //4222
// console.log(typeof(num + num + str + num + num)); //string


// let n1 = n2 = n3 = 45;
// console.log(n1); //45
// console.log(n2); //45

let cnt = 8;

console.log(cnt);
console.log(++cnt);
console.log(cnt++);
console.log(cnt--);
console.log(--cnt);
console.log(cnt);
console.log(++cnt+--cnt);