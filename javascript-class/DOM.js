// dom - DOCUMENT OBJECT MODEL (API)
//       an interface to change the contents of page
//document.body.style.backgroundColor="blue";
console.log("marsuk");


// select element by name

let fruits = document.getElementsByName("fruits");
// DOM TRAVERSAL
// .firstElemnetChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children)
let element =  document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "blue";

// add or change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

 let tag = document.createElement("h1");
 tag.innerHTML =  "leo";
 document.body.append(tag);
  

 


