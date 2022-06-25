const biodata={
  name:'Noman',
  age:30,
  subject:'CSE'
}

//###// Object to String(JSON-Data)
const jsonString = JSON.stringify(biodata);
console.log(jsonString);
//Undefined(String)
console.log('Calling Json Data:', jsonString.name)


//###// String(JSON-Data) to Object
const jsonObj= JSON.parse(jsonString)
console.log(jsonObj)
//Defined(Object)
console.log('Calling Json Data:', jsonObj.name)
