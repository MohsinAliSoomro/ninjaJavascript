//Secrets of Javascript ninja

//invode as a function 
// 4.5 

//function without strict mode
function ninja() {
    return this;
}
console.log(ninja())


//function with strict mode
function sumurai() {
    "use strict"
    return this;
}
console.log(sumurai())



//As expected, a nonstrict function has window as function context
console.log(console.assert(ninja() === window,"the context is global object"))


//the strict function on the other hand has undefined context
console.log(console.assert(sumurai() === undefined,"the context is undefined"));

