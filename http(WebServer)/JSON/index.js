const fs = require('fs');
const biodata={
  name:'Noman',
  age:30,
  description:'Student',
  department:'CSE'
}

// 1: Convert Object to JSON-String formate
const jsonString = JSON.stringify(biodata);

// 2: Write the data to another File
fs.writeFile('./newfile.json',jsonString,(err)=>{
console.log('File created successfully...',err);
})

// 3: Read the data from the File
fs.readFile('./newfile.json','utf8',(err,data)=>{
  console.log('File read successfully...',err)
  console.log('JsonStringData :', data);

// 4:Convert JSON-String data to  orginal Object Data
  const jsonObj = JSON.parse(data);
  console.log('ObjectData: ',jsonObj);
})
