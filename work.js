const url = require("url");
const port = 3000;
const http = require("http");

http.createServer((req,res) => {

    const urlData = url.parse(req.url, true);
   
    

    if (urlData.pathname === "/api/fib"){
        let k1 = urlData.query.k;
        let k = parseInt(k1);
        if (((k1.length !== String(k).length) || k <= 0 ) ||isNaN(k)){
            res.writeHead(400);
            res.end();
            return
        } 
        console.log(k);
        let a = 1;
        let b = 0;
        let c = 0;
        for (let i = 0; i <= k; i ++) {
            b = a;
            a +=  c;
            c = b;
        }
        res.end(String(a-1));
    } else {
        res.writeHead(400);
        res.end();
    }
}).listen(port);

console.log(`ok: ${port}`)
