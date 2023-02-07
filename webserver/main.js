var http = require('http')

const myServer = (req,res)=>{
    if(req.url =='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }else if(req.url == '/student'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is the student page.</p></body></html>');
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>The page does not exist!</p></body></html>');
        res.end();
    }
}

var server = http.createServer(myServer)

const PORT = 8000
server.listen(PORT)
console.log("Server is running")