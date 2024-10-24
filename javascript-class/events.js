// HTML events are "things" that happen to HTML elements.

 // When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// An HTML web page has finished loading
 //An HTML input field was changed
// An HTML button was clicked
/*
When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key
*/

// .addEventListener(event,function,capture)
// you can add many event handlers to on element
const mybod = document.getElementById("mybod");
mybod.addEventListener("mouseover",changeblue);
function changeblue
{
    mybod.style.backgroundColor = "blue";
}