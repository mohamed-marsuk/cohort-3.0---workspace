// objects - objects has properties and things
//           that they can do
//            use . to access properties and methods

let details = {
                name:"marsuk",
                age:21,
                gender:"male"
}
console.log(details);
// accesing the objects 
console.log(details.name);

// another way to create the object
let detail = new Object();
detail.name = "leo das";
detail.age = 32;
console.log(detail);
// we can give nested objects and we can 
// give arrays also
// by using methods
let item = {
            name:"leo",
            buy()
            {
                console.log("i bought a car");
            }
}
item.buy()