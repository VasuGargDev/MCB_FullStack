let elem = document.getElementById("click");
console.log(elem);

//adding class to already created element (container)
let elemClass = document.getElementsByClassName("container");
elemClass[0].classList.add("bg");
elemClass[0].classList.add("text-color");

console.log(elem.innerHTML);
console.log(elem.innerText);
//elem is an object for element click. 
//hence any id (like "click") can be targetted using id name


//tn=tag name
tn=document.getElementsByTagName('div');
console.log(tn);

//creating element in HTML from here (JS) itself
//cp=create paragraph
cp1=document.createElement('p');
cp1.innerText = "This is my coding show!"
tn[0].appendChild(cp1);

//replacing element
cp2=document.createElement('b');
cp2.innerText = "This text has replaced the previous one!"
tn[0].appendChild(cp2);

tn[0].replaceChild(cp2,cp1);


//selecting using query 
s1 = document.querySelector('.container');
console.log(s1);

console.log("hota kyu nahi");


// events in js
function clicked() {
    document.querySelectorAll(".container")[1].innerHTML = "This is my project!"
    console.log("click hua");
}

window.onload = function()  {
    console.log("My project is the besst!");
}

click.addEventListener("click", function(){
    console.log("Chu matt click matt kr");
})