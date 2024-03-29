// Primitive

// 7 types:- String, Boolean, Number, null, undefine, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmailId;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const BigNumbers = 35364586476474787n

// Reference (Non-Primitive)
// Array, Objects, Functions

const heros = ["Shaktiman", "Power Rangers", "Avengers" ];
let myobj={
    name: "Sonali",
    favColor: "Purple",
}

const myFunction = function(){
    console.log("Peekaboo");
}
console.log(typeof BigNumbers);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let favSongName = "Meer-E-Karwaan"
let anotherFav = favSongName
anotherFav = "aasman"

console.log(favSongName);
console.log(anotherFav);


let userOne = {
    email: "user@gmail.com",
    upi:" user@ybl"
}
let userTwo = userOne

userTwo.email = "ilanos@gmail.com"

console.log(userOne);
console.log(userTwo);


