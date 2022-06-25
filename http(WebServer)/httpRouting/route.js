const http = require('http');
const url = require('url');

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
  }else{
    res.writeHead(404,{'Content-Type': 'application/json'});
      res.end('Error: Unknown URL')
  }
})
server.listen(3000,()=>{
  console.log('Listening on port 3000');
})
