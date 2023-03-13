// http://localhost:8888/

const http = require('http');

fun = (req,res) =>  {
    res.write("<h1>Welcome to my node server</h1>");
    res.end();
};

http.createServer(fun).listen(8888); 

// run ctrl+alt+N
//stop running code ctrl+alt+M
