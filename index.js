const http = require ('http');
const PORT = 5000;
const HOST = '127.0.0.1';
const requestListiner = require('./requestListener');

const server = http.createServer((req, res) => {
    const {url, method} = req;
    console.log('url:', url);   
    console.log('method:', method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const indexContent = fs.readFileSync('./index.html', "utf8");
    console.log(indexContent);
    res.end(indexContent);
}); 

server.listen(PORT, HOST, () => {console.log(`Server is listening ${HOST} on ${PORT} port`)});
