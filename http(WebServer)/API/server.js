const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req,res)=>{

  if(req.url=='/'){
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end('Welcome to home Page');
  }else if(req.url=='/login'){
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end('Login Page');
  }
  else if(req.url=='/register'){
    res.writeHead(200,{'Content-Type': 'application/json'});
      res.end('Register Page');
  }  else if(req.url=='/users'){
    fs.readFile(`${__dirname}/userApi.json`, 'utf8', (err,data)=>{
      console.log('userData: ',data);
      res.end(data);

      const jsonObj = JSON.parse(data);
      console.log('jsonObj: ',jsonObj);

    })
        res.writeHead(200,{'Content-Type': 'application/json'})
    }else{
    res.writeHead(404,{'Content-Type': 'application/json'});
      res.end('Error: Unknown URL')
  }
})
server.listen(3000,()=>{
  console.log('Listening on port 3000');
  console.log(__dirname);
})
