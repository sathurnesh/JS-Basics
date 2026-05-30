var firstName="Sathur"
var firstName="Prem"
console.log(firstName) //Re-Declaration is allowed

var lastName="Monish"
lastName="sandy"
console.log(lastName) //Re-Assignment is allowed

//console.log(mobNo)
var mobNo=8766492692 //undefined [HOISTING is allowed]

function print() {
var empNo=8976
}
//console.log(empNo) // Specific to Function Scope 

function print(){
var mobNo=8989898783

{
    var mobModel="Samsung"
    console.log(mobModel)       //since the mobModel is with the Block of a particular Function, it should work.
}

}
print()

function print() {
var mobNo=8989898783

{
    var mobModel="Samsung"
       

}

}
print()                  //Uncaught ReferenceError ReferenceError: mobModel is not defined 
console.log(mobModel)   //Since var is specific to function scope, we called it outside the function. 