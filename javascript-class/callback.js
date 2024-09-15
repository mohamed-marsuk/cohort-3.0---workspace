// callback - function passed as an argument to
//             to another function

function dispconsole(name) {
  console.log("hello", name);
}
function dispheading(name) {
  const head = (document.getElementById("mylabel").innerHTML = "hello" + name);
}

function greet(callback) {
  callback("marsuk");
}
greet(dispconsole);
// forEach
let arr = ["leo","das"];
arr.forEach(print)
function print(val)
{
    console.log(val);
}
