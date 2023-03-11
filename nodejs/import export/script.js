//import

const app = require('./app');
console.log(app)

console.log(app.x)
console.log(app.y)

console.log(app.z());



//global core modules
console.log("global wala core module");


//non-global core modules
const fs = require('fs');
fs.writeFileSync("code.txt","KG codingg");    //automatically creates a file code.txt and writes KG coding in it

console.log(__dirname);
console.log(__filename);