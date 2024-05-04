let score = "23";
// One way
console.log(typeof(score));
// 2nd way
console.log(typeof score);

// convert string datatype into number
let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); // Datatype will be number

// suppose
// for below 33abc it print NaN not orignial value stored in Score because of combination of number and strings
// let Score = "33abc";
// when value in Score will null it will print 0
// let Score = null;
// when value in Score will be undefined it will print NaN
//let Score = undefined;
// for boolean true it will print 1 and for false it will print 0
//let Score = true;
// If value is already string it will print NaN
let Score = "Ali";
let value_In_Number = Number(Score);
console.log(typeof(value_In_Number));// It will also return number
console.log(value_In_Number); // will return special value NaN not 33abc 



// convert number into boolean => return true
let isLogged_In = 1;
let value_number_1 = Boolean(isLogged_In);
console.log(value_number_1);
console.log(typeof value_number_1);

// if we convert string value into boolean => return true
// convert quotations into boolean => return false
let isLogged = "" ;
let value_num = Boolean(isLogged);
console.log(typeof value_num);
console.log(value_num);


// convert number into string
let some_number = 4455;
let value = String(some_number);
console.log(typeof value);
console.log(value);