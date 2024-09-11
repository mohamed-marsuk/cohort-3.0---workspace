// create a http server
// using express
// node default libraary
/*
const express = require("express")

const app =  express(); //  creating the hospital

// now this is the logic..
app.get("/",function(req,res){
    res.send("hi i displahy my message from web server!");

})



app.listenI(3000); // addresss of the hospital
*/

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("i have 2 kidneys");
});
app.listen(3000);
