const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);

module.exports = function requestListiner(req, res){
    const {url, method} = req;
    const page = url == '/' ? 'index.html' : url;
    const regPage = /^.*\.html$/;
    if (regPage.test(page)){
      const pagePath = path.join(__dirname, '/pages/', page);
      if (fs.existsSync(pagePath, {encoding: 'utf-8'})){
        readFile(pagePath)
        .then(data => {
          res.statusCode = 200;
          res.setHeader('Content-Type','text/html');
        })
        .catch(err => {
          res.statusCode = 500;
          res.end('Server error')
        });}
      else {
        res.statusCode = 404;
        res.end('Page is not found')
      }
    }
    switch (method) {
      case 'GET': {
        
        break;  
      };
        
        break;
    
      default: {
        res.statusCode = 400;
        res.end('Bed request');
        break
      }
    }

    // res.end(`Hello! Method is ${method} in url ${url}`);
  };