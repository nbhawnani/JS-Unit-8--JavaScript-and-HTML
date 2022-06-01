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
// specifying the class or ID or any other criteria
// querySelector returns the 1st element matching the criteria
const toDoListNode= document.querySelector("#to-do")
toDoListNode.innerHTML="<i>This is my To Do List</i>"

//querySelectorAll returns ALL elements matching the criteria
const toDoListItems= document.querySelectorAll(".item")
console.log(toDoListItems[2].innerHTML)

// multiple elements using tag name as criteria
const pItems= document.querySelectorAll("p")
pItems[1].innerHTML=pItems[1].innerHTML+":"

// multiple elements using tag name AND classname as criteria
const pItem= document.querySelectorAll(".item")
console.log(pItem[0].innerHTML)
pItem[0].style.backgroundColor="lightgreen";
pItem[0].style.color="red";



