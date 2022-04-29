document.write("<br>This is via external JS file")

// Now select p1 using it's ID
const paragraph = document.getElementById("p1");

// Now change text of p1 id to something else
paragraph.textContent = "This P content is revised through JS using it's ID"

// Now change innerHTML of p1 id to something else
paragraph.innerHTML="Revised <b>innerHTML</b>"

// JavaScript - finding via classname. Returns a collection/array
const redElements=document.getElementsByClassName("red");
redElements[0].textContent="Revised <p> by accessing it via className";
redElements[1].innerHTML="<em>Italicized H1 heading via JS</em>"
//console.log(redElements[1].innerHTML)

// JavaScript - finding via HTML tag name. Returns a collection/array
const h3Elements=document.getElementsByTagName("h3")
//console.log(h3Elements[0].innerHTML)
const pElements=document.getElementsByTagName("p")
console.log(pElements[0].innerHTML,pElements[1].innerHTML)


// Extracts 1st element matching the criteria
const collection= document.querySelector("li")

