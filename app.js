var http = require('http'),
    fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');

const server = http.createServer((req , res)=>{
    console.log(`request was made: ${req.url}`);
    res.writeHead(200 , {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
    myReadStream.pipe(res);

});

server.listen(3000 , ()=> console.log('server start working'))