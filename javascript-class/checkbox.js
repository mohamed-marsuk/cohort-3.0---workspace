document.getElementById("mybot").onclick = function () {
  const raz = document.getElementById("razorpay");
  const tm = document.getElementById("paytm");
  const pe = document.getElementById("phonepe");

  if (raz.checked) {
    console.log("you are paying by using razorpay!");
  } else if (tm.checked) {
    console.log("you are paying by using paytm!");
  } else if (pe.checked) {
    console.log("you are paying by using phonepe!");
  }
  document.getElementById("disco").innerHTML = raz + " " + tm + " " + pe;
};
