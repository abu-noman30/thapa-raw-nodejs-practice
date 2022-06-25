const path =require("path");

//###//path directory name
const dirname = path.dirname('C:/Users/noman/MERN/NodeJS/raw-nodejs-practice/path/index.js')
console.log('dirname: ', dirname);

//###//path extension name
const extentionname = path.extname('C:/Users/noman/MERN/NodeJS/raw-nodejs-practice/path/index.js')
console.log('extentionname: ', extentionname);

//###//path file name
const basename = path.basename('C:/Users/noman/MERN/NodeJS/raw-nodejs-practice/path/index.js')
console.log('basename: ', basename);


//###//path parseObject{root,dirname,basename,extname,basename}
const parseObject = path.parse('C:/Users/noman/MERN/NodeJS/raw-nodejs-practice/path/index.js')
console.log('parseObject: ',parseObject);
console.log('parseObject-filename: ',parseObject.name);
console.log('parseObject-dirname: ',parseObject.dir);
console.log('parseObject-basename: ',parseObject.base);
