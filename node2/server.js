const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server start');

    res.setHeader('Content-type', 'text/html');

    const createPath = (page) => {
        return path.resolve(__dirname, 'views', `${page}.html`);
    };

    let basePath = '';
    switch (req.url) {
        case '/':
        case '/index.html':
            basePath = createPath('index');
            break;
        case '/css':
            basePath = createPath('css');
            break;
        default:
            basePath = createPath('404');
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.end('404 Not Found');
        }
        else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Сервер запущен на порту localhost:${PORT}`);
});
