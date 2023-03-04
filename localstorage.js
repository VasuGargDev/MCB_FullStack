// type all these in chrome console

//single quotes '' don't work with JSON only double quotes ""

/* 

//set local storage (key value pair)    
localStorage.setItem("name","Vasu")

//accessing local storage
localStorage

//cleraring local storage
localStorage.clear()

//accessing local storage value using key
localStorage.getItem("name")

//removing local storage value using key
localStorage.removeItem("name")

*/




//JSON

/*
It is generally used to exchange data.
By data exchange we mean to make an object out of any data and using that obj to create a string.
And we do this since string manipulation is generally easier.
Hence object is transformed into string and this is what we call JSON object.
Then many different operations can be performed on json obj
*/

obj = {name: "Vasu",length:2}

//convered to string 
jason= JSON.stringify(obj);
console.log(jason);

//checking its type
console.log(typeof jason);

//parse means we create a tree of our object
//NOTE have to pass our obj as string and for that pass it in backticks
pars = JSON.parse(`{"name":"Vasu","length":2}`);
console.log(pars);
 