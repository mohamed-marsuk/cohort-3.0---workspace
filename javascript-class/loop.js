// while - repeat some code while some
//         condition are true potentially  infinite

i = 1; // initialization
while (i <= 10) {
  console.log(i);
  i--;
}

// for loop -

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// for 0f

let arr = ["apple", "banana", "fig"];
for (let fruit of arr) {
  console.log(fruit);
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(j);
  }
}
