// Unary Operators
//Consist of two operators: 1: Increment , 2: Decrement
//Increment 
let a = 10;
// Post increment
a++;
console.log("a++ =",a);
// Pre increment
++a;
console.log("++a = " , a);
// Decrement
// Post Decrement
a--;
console.log("a-- = ", a);
// Pre Decrement
--a;
console.log("--a = ",a);
 

// Assignment Operators
let b = 5;
let c = 2;
b += 4;
console.log("b = " , b);
b -= 4;
console.log("b = " , b);
b *= 4;
console.log("b = " , b);
b /= 4;
console.log("b = " , b);
b %= 4;
console.log("b = " , b);
// Exponentiation
b ** 4;
console.log("b = ",b);

// Conditional Statements
let age = 25;
if(age === 25){
    console.log("your age is greater than 20..");    
}
// Example of if-statement
let mode = "Dark";
if(mode === "Dark"){
    color = "Black"
}
if(mode === "Light"){
    color = "white"
}

console.log(color);

// Example of if-else Statement
let x = 15;
if(x%2 === 0){
    console.log(x,"Even number...");
}
else{
    console.log(x,"Odd number...");
}

// Ternary Operators
let Age = 20;
let result = Age > 18 ? "Adult" : "Not Adult";
console.log(result);