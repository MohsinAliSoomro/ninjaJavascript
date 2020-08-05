//initialize a function 
function Ninja() {
    //constructor
    this.stulk = function () {
        return this
    };
}
Ninja()
//Create two object by invoking the constructor with new,
//the newly create object are reference of Ninja function
var ninja1 = new Ninja();
var ninja2 = new Ninja();

//test the result
console.log(console.assert(ninja1.stulk === ninja1,"True", "he first ninja is stulking"))

console.log(console.assert(ninja2.stulk === ninja2,"True", "the socond ninja is stulking"))
