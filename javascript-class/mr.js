// map - exexcute call back  for each
//       array element and returns new array

let USD = [20,60,56]
let INR  =  USD.map(x=>x*83)
console.log(INR);

// filter - return new array ny checking 
//          each value of original array using
//          callback function

let cost = [10,200,300,45,50];
let lessthan100 = cost.filter(x=>x<100)
console.log(lessthan100);

let cost1 = lessthan100.filter(ras)
function ras(x)
{
    return x<100
}
console.log(cost1);
