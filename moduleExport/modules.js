const app={};

app.add=(a,b)=>{
console.log('add:', a+b);
}

app.sub=(a,b)=>{
console.log('sub:', a-b);
}


app.mul=(a,b)=>{
console.log('mul:', a*b);
}
module.exports = app;
