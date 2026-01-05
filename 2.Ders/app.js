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
    var c=3
    console.log(c);
}

function method2(){
    var d=4;
    if(true){
        let e=5;
        console.log(d);
        console.log(e);
    }
    console.log(d)    
    console.log(e)//! Hata verir Erişemez     
}

method2();

//?NOT: block içindeki scope varı kapsamaz let veya const ile tanımlanır