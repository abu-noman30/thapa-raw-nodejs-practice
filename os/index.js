const os = require('os');

//###// os Architecture
osArchitecture= os.arch()
console.log('osArchitecture:', osArchitecture);


//###// os Total Memory
const totalMemory = os.totalmem();
console.log('TotalMemory(Byte):', totalMemory,' byte');
console.log('TotalMemory(MB):', totalMemory/1024/1024,' MB');
console.log('TotalMemory(GB):', totalMemory/1024/1024/1024,' GB');

//###// os Free Memory
const freeMemory = os.freemem();
console.log('freeMemory(Byte):', freeMemory,' byte');
console.log('freeMemory(MB):', freeMemory/1024/1024,' MB');
console.log('freeMemory(GB):', freeMemory/1024/1024/1024,' GB');


//###// os Type
const osType= os.type()
console.log('osType:', osType)
