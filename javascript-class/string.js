// useful string properties & methods

let name = "marsuk";
console.log(name.length);
console.log(name.charAt(2));
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// slice() - it extract a section of string and returns as as new string
//           without modifying the original string..

let username = "og goat";
firstname = name.slice(4, 6);
console.log(firstname);

// method chaining - caliing one method after another
//                   in one contribution line of code

let varname = "leo das";
change = varname.charAt(0).toUpperCase();
console.log(change);
