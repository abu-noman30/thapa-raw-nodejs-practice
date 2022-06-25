const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

//_________________________________________________________
// PIPE Method
//_________________________________________________________

readStream.pipe(writeStream);
