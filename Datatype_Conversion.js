// Data type conversion in JavaScript involves converting one data type to another, such as from a string to a number or from a boolean to a string. JavaScript provides two ways to perform type conversions: implicit conversion (coercion) and explicit conversion (manual conversion). Let's explore both in detail:
// 1. Implicit Conversion (Type Coercion)

// JavaScript automatically converts data types in certain operations.
// Examples of Implicit Conversion:

//     String and Number:

//     javascript

// let result = '5' + 3; // "53" (string)

// In the above example, JavaScript converts the number 3 to a string and concatenates it with '5'.

// javascript

// let result = '5' - 2; // 3 (number)

// In this case, JavaScript converts the string '5' to a number and performs the subtraction.

// Boolean Conversion:

// javascript

//     let result = 0 == false; // true
//     let result = 1 == true;  // true

//     JavaScript converts numbers to booleans in the comparison.

// 2. Explicit Conversion (Manual Conversion)

// You can explicitly convert data types using various built-in functions.
// Examples of Explicit Conversion:

//     Convert to String:
//         Using String() function:

//         javascript

// let num = 10;
// let result = String(num); // "10" (string)

// Using .toString() method:

// javascript

//     let num = 10;
//     let result = num.toString(); // "10" (string)

// Convert to Number:

//     Using Number() function:

//     javascript

// let str = "123";
// let result = Number(str); // 123 (number)

// Using parseInt() and parseFloat():

// javascript

//     let str = "123.45";
//     let result = parseInt(str);   // 123 (integer)
//     let result = parseFloat(str); // 123.45 (floating-point number)

// Convert to Boolean:

//     Using Boolean() function:

//     javascript

//         let str = "hello";
//         let result = Boolean(str); // true
//         let emptyStr = "";
//         let result = Boolean(emptyStr); // false

// 3. Type Conversion Table

// Here’s a quick summary of how JavaScript converts data types:
// From → To	String Conversion	Number Conversion	Boolean Conversion
// String	"123" → "123"	"123" → 123	"" → false, "text" → true
// Number	123 → "123"	123 → 123	0 → false, 123 → true
// Boolean	true → "true", false → "false"	true → 1, false → 0	N/A
// Null	null → "null"	null → 0	null → false
// Undefined	undefined → "undefined"	undefined → NaN	undefined → false
// Object	[1, 2] → "1,2", {} → "[object Object]"	[1, 2] → NaN, {} → NaN	{} → true
// 4. Best Practices for Type Conversion

//     Avoid Implicit Conversion where possible, as it can sometimes lead to unexpected behavior. Use explicit conversion to make your code more readable and predictable.
//     Be cautious when working with truthy and falsy values, as JavaScript treats certain values (0, "", null, undefined, NaN) as false in boolean contexts.



// // let Name = Usama

// let age = 33 
// let Name = "Usama"
// let Number = "8" + 2  // result is 
// console.log(Number);
// // console.log(typeof (Name));
// // console.log(typeof Name);
