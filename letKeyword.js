//let firstName="Thendral"
//let firstName="Kasim"  
//console.log(firstName) 
//Uncaught SyntaxError SyntaxError: Identifier 'firstName' has already been declared
//Re-Declaration is not Allowed

//let firstName="Thomas"
//firstName="Edison"
//console.log(firstName)  //Edison {To get output, Comment line ~ 1,2,3 with //}
//Re-Assignment is allowed

//console.log(mobNo)
//let mobNo=87878348478 //Uncaught ReferenceError ReferenceError: Cannot access 'mobNo' before initialization
//Hoisting is not allowed

function print(){
let sex="Male"

{
let nationality="Indian"
}
  console.log(nationality)  //Uncaught ReferenceError ReferenceError: nationality is not defined
}
print()                    //since we called "nationality" outside the block, it is specific to block ~ but not to function.
