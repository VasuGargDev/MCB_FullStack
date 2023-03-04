function sumb(a,b)  {
    return a+b;
}

//sum using arrow function
suma = (a,b) =>  {
    return a+b;
}

thodaRuk = () =>  {
    console.log("JS is the best language");
}

setTimeout(thodaRuk,3000);
clr = setInterval(thodaRuk,1000);

//to stop type this in console
//clearInterval(clr)
//cleaqrTimeout(clr)