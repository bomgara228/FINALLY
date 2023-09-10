const http = require('http');
const port = 3100;

const server = http.createServer();

server.on('request', (req,res) => {
    res.end("Hello word");
});

server.on("connection",() => {
    console.log("connected");
});
    
server.listen(port, () => { console.log(`server started on port: ${port} `)});
