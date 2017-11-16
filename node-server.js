let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    let content = fs.readFileSync("./demo.html", "utf-8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    console.log(req.url);
    res.end(content);
}).listen("8125", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server start, listening on http://localhost:8125");
    }
});