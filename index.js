const http = require('http');
const server = http.createServer(requestListiner);
server.listen(3000);
let count = 0;
function requestListiner(request, response){
  console.log('It is my first server', (++count));
  response.end(`Qwerty! msg #${count}`);
};




// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
// // const superSum = require('./math');
// // const {superSum, pow2} = require('./math');
// const Math = require('./math');
// const fs = require('fs');
// const os = require('os');
// const util = require('util');
// const path = require('path');

// const _ = require('lodash');

// const res = Math.superSum(1,2,3,4,5);
// const textSync = fs.readFileSync('./README.md', {encoding: 'utf8'});

// // const textAsync = fs.readFileSync('./README.md'
// //           ,{encoding: 'utf8'}
// //           ,(err, data) => {if (err) {console.log('Error. ', err);}
// //                            else{/*console.log('Data', data)*/data}}
// //           );
// // promise
// // console.log('Async file reading with promises');

// // const myReadFile = util.promisify(fs.readFileSync);

// // const df = myReadFile('./README.md', {encoding:'utf-8'}).then(data => console.log('Data', data)).catch(err => console.log('Error', err));

// // console.log(df);

// // console.log(res);
// // console.log(Math.superSum(6,7,8,9,10));
// // console.log(Math.pow2(3));
// // console.log('textSync',  textSync);
// //console.log('textAsync', textAsync);
// // console.log('textProm',  textProm);
// // console.log(_.sum([1,2,3,4,5]));
// // console.log(_.concat([1,2,3],[4,5]));

// // console.log('EOL = ',os.EOL);
// // console.log('arch = ',os.arch());
// // // console.log('constants = ',os.constants);
// // console.log('cpus = ',os.cpus());
// // console.log('platform = ',os.platform());
// // console.log('release = ',os.release());
// // console.log('hostname = ',os.hostname());
// // console.log('userInfo = ',os.userInfo());
// // console.log('type = ',os.type());
// // console.log('version = ',os.version());

// // console.log('process: ', process.env); // переменные окружения
// // console.log('__filename: ', __filename);
// // console.log('__dirname: ', __dirname);
// // console.log('fs.readdirSync(): ', fs.readdirSync('.')); //чтение текущей папки

// // const files = fs.readdirSync('.').filter(e => e.slice(-2) == 'js').toString();
// const files = fs.readdirSync('.').filter(e => e.endsWith('js')).toString();
// as=[];
// const readFile = util.promisify(fs.readFileSync);
// const content = fs.readdirSync('.')
//                   .filter(f => f.endsWith('js'))
//                   .forEach((f) => readFile(f/*, {encoding: 'utf-8'}*/)
//                     .then(data => console.log(data))
//                     .catch(err => console.log(err))
//                   );
//                   // .forEach((file) => {
//                   //   console.log(fs.readFileSync(file, "utf8"));
//                   // });
// console.log(files);
// console.log(content);

