//Var Let Const farkları
/*  1. En önemli Fark 
    *Var ->Function Scope
    *Let/Const -> Block Scope
*/
var a=1;
function method1(){
    var b=2;
    if(true){
        let c=3;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);   
    console.log(b);   
    //!console.log(c); Çalışmaz hata verir.
}
console.log(a);
//!console.log(b); Çalışmaz hata verir.
//!console.log(c); Çalışmaz hata verir.
method1();

//todo:block içindeki scope varı kapsamaz let veya const ile tanımlanır

/* 2.Fark 
    *var yeni değişken izin verir
    *let yeni değişken izin vermez sadece değiştirmeye izin verir
    *const sabittir hiçbir şeye izin vermez
*/

var d = 4;
var d = 5;
console.log(d); //* Hata vermez.

let e = 6;
//!let e = 7; Çalışmaz hata verir.
e=7; //todo: Bu şekilde değiştirir.
console.log(e);

const f = 8;
//!const f = 9; Çalışmaz hata verir.
//!f = 9; Çalışmaz hata verir.
console.log(f);

var user = {
    userName : "Yavuz",
    password : "123",
}
user = {
    yas : 23
}
user.yas = 24;

let user1 ={
    userName : "Alp",
    password : "456"
}
 
user1= {yas:25}
user1.userName

console.log(user)
console.log(user1)