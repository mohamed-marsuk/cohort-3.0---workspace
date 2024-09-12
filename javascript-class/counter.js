let count = 0;
document.getElementById("decr").onclick = function () {
  count -= 1;
  document.getElementById("mylabel").innerHTML = count;
};

document.getElementById("res").onclick = function () {
  count = 0;
  document.getElementById("mylabel").innerHTML = count;
};

document.getElementById("incr").onclick = function () {
  count += 1;
  document.getElementById("mylabel").innerHTML = count;
};
