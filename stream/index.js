const fs = require('fs');
const http = require('http');


//Types of Streaming:
      //1: Readable
      //2: Writeable
//Each type of Stream is an EventEmitter(event listner) instance
      // 1: data - Event fired when data available to read.
      // 2: end - Event fired when no data available to read.
      // 3: error - Event fired when any error on writing/receiving data.
      // 4: finish - Event fired when all data has been flushed


//ReadStream
const readStream = fs.createReadStream('streamApi.json');
//WriteStream
const writeStream = fs.createWriteStream('outputApi.json');


const server = http.createServer();
server.on('request', (req, res) => {

  readStream.on('data', (chunk) =>{
      console.log(chunk);
      res.write(chunk);
      writeStream.write(chunk);
  });
  readStream.on('end', () =>{
    res.end();
  });
  readStream.on('error', (err) =>{
    console.log('404 Not Found :',err);
    res.end('404 Not Found');
})
})

 server.listen(3000,()=>{
  console.log('listening on port 3000.')
})
