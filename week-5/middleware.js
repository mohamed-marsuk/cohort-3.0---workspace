const express = require("express");
const app = express();
function middleware(req, res, next) {
  console.log(`Method is ${req.method}`);
  console.log("URL is " + req.url);
  console.log(new Date());
  next();
}
app.use(middleware);
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a + b,
  });
});
app.get("/sub", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a - b,
  });
});
app.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a * b,
  });
});
app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a / b,
  });
});
app.listen(3000);
