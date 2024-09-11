// how to accept user input ?
// easy way is window prompt
// difficult way is using html textbox

// let username = window.prompt("what is your name");
// console.log(username);

let name;
document.getElementById("mybut").onclick = function () {
  name = document.getElementById("mytext").value;
  console.log(name);

  document.getElementById("mylabel").innerHTML =  name;
};
