module.exports = function requestListiner(req, res){
    const {url, method} = req;
    res.end(`Hello! Method is ${method} in url ${url}`);
  };