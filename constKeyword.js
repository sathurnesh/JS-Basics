//const firstName="Rupesh"
//const firstName="Krish"
//console.log(firstName)    //SyntaxError: Identifier 'firstName' has already been declared
//Re-declaration is not allowed

//const lastName="Raj"
//lastName="Lucy"
//console.log(lastName) //Uncaught TypeError TypeError: Assignment to constant variable.
//Re-assignment is not allowed

//console.log(mobNo)
//const mobNo=78787909084 //Uncaught ReferenceError ReferenceError: Cannot access 'mobNo' before initialization
//Hoisting is not allowed

function print(){
const sex="Male"

{
const nationality="Indian"

}
console.log(nationality)     //since natonality is called outside the block, Error throws. 
}
print()


//Only Re-Assignment is a differentiation from "let" otherwise both donot allow re-declaration, hoisting and it is specific to BLOCK scope.