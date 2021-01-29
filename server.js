const http = require('http');
let fs = require('fs');
let path = require('path');

let PORT = process.env.PORT || 5000;

let server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'Public', req.url === '/' ? 'index.html' : req.url);
    let fileExtension = path.extname(filePath);
    let contentType = 'text/html';
    switch (fileExtension) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.js':
            contentType = "text/javascript";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'Public', 'error.html'), (err, data) => {
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf-8');
                })
            }
            else {
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    })
})


server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})