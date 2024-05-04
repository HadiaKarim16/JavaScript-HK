// Treat All JS code as newer version
"use strict"; 

//Datatypes
let name = "Ali Khan"; // String
let Marks = 50; // number
let isPass = true; //boolean
let Grade; // Undefined
let temperature = null;


// Typeof => use to know the datatype of any variable 
console.log(typeof(name));
console.log(typeof(Marks));
console.log(typeof(isPass));
console.log(typeof(Grade));
console.log(typeof(temperature)); // Null is an object

/* --------- Primitive Datatypes -------------*/

// String => use to store text in single quote/ double quote
// Big int => use to store large integer values
// Number => stor values 2 power 53
// Null => standalone value
// undefined => uninitialized
// Null => assigned to any variable null/empty value
// Symbol =>  used for uniqueness in react 

/* ---------- Non Primitive Datatypes ------------*/

// Objects 
const product = {
    name : "Parker Jotter Standard CT Ball Pen" ,
    color: "(Black)",
    ratings: 4, 
    offer: 5,
    price: 270
};
console.log(product);
const profile = 
{
    userName : "Hadia Karim",
    posts : 195,
    followers :569,
    following: 9,
    bio : "Learning Javascript | CS-2nd year Undergraduate"
};
console.log(profile);