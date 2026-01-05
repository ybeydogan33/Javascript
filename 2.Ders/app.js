/*Scpoe

Global Scope
Function Scope
Block Scope
*/

//Gloabl Scope
var a =1;
console.log(a);

//Function Scope
function method1(){
    var b=2;
    console.log(b);
}
method1();
//Block Scope
if(true){
    let c=3
    console.log(c);
}

