function WhatsMyContext(){
    return this;
}

console.log(console.assert(WhatsMyContext()===window,"function call on window"))


var getMyThis=WhatsMyContext
console.log(console.assert(getMyThis()===window,"Another function call is window"))

var ninja1={
    getMyThis:WhatsMyContext
}

console.log(console.assert(ninja1.getMyThis()===ninja1,"Working with the ninja1"))
