// EventEmitter is a Class(create Object of the class to fire events)
const EventEmitter = require('events')

// Object of the EventEmitter Class
const event = new EventEmitter();

// event listener(on)/function define(on)
event.on('onClick',(statusCode,message)=>{
  console.log(`onClick Button clicked.....Status Code: ${statusCode} and Message: ${message}`)
})

// call event name/function name---(always set at the bottom of event listener)
event.emit('onClick',200,'Ok');
