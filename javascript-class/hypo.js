// hypotenuse triangle calculator
// formula :  c=sqrt of a^2 + b^2

let a;
let b;
let c;
document.getElementById("mybutton").onclick = function () {
  a = document.getElementById("mynum").value;
  a = Number(a);
  b = document.getElementById("mybnum").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("clabel").innerHTML = "the value of c is" + c;
};
