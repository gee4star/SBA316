// let background_section = document.selectElementById(`background-section`)
// let span = document.querySelector(`span`)
// var myPar = document.getElementById('par') //caches (saves to a variable) the element above in the HTML with id par to a variable called myPar
//    let myDiv = document.createElement('div'); //This creates a new element under "Par" with one "div" element

// myDiv.className = 'example'; //gives the new div made above a classname of 'example'
// myDiv.appendChild(document.createTextNode('New element text')); //appends a child to myDiv which has the text inside it New element text

// document.body.replaceChild(myDiv, myPar); //PUTS the new text just written in Javascript from myDiv and now this text: New element text replaces the text in myPar: Example Text
let submit= document.getElementById("btn");
submit.addEventListener("click", myAlert);
function myAlert(){
    alert("Thanks!");
}
let pushMeFirst= document.getElementById("btn2");
pushMeFirst.addEventListener("click", myAlert2);
function myAlert2(){
    alert("Welcome!");
}

