process.stdin.on("readable", ()=> {
    let chunk = null;
    while (chunk = process.stdin.read() != null)  {
        console.log(chunk); 
        if(chunk ="") return null;
    }
})