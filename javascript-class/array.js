// array - it is a variable that contains multiple values
let fruits = ["apple","banana","orange","fig"]
console.log(fruits[1]);
 
//2d array
let matrix = [[3,4,5],[1,2,3]]
console.log(matrix[0][0]);
// arrray methods
//push - add elements at the end
let array = [1,2,3,4,5]
array.push(6)
console.log(array);
//pop - removes element from the end
//      returns removed element
console.log(array.pop());
// shift - remove element from the start of array
console.log(array.shift());
// slice(starting index,ending index)
console.log(array.slice(1,3));
// join - convert array to string
// split - converts string to array
// concat and spread operator

let firstarr = [1,2,3];
let secondarr = [4,5,6];
finalarr = [...firstarr,...secondarr];//spread
console.log(finalarr);



