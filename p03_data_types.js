/*
java scriptte 5 farklı data türü vardır
1- String
2- numbers
3- boolean
4- null değer
5- undefiend= tanımlanmış 
*/


//String

let name1="Ömer";
var name2= "omar";

console.log(typeof name2);

//console.log(name) JS tarafından özel tanımlama yapılmış değişken isimlerini kullanamayız

//numbers

let age1=20;
let height= 155.9;
let number= "225"; // bu tanımlama string olacak bu değişken matematiksel işlemlerde kullanılamaz

console.log(typeof age1 ); //typeof değişkenin türünü yazdırır
console.log(typeof number);


//boolean
let isHereRetired= false;

console.log(isHereRetired);
console.log(typeof isHereRetired);

// Null değer

let studentNumber= null;

console.log(studentNumber);
console.log(typeof studentNumber);// içerisinde bir değer yoksa data türünü vermez


//Undefined tanımlanmaış değer

let studentId= undefined;

console.log(studentId);
console.log(typeof studentId);


studentId =97;
console.log(studentId);
console.log(typeof studentId);

console.log("---");

studentNumber=123;
console.log(studentNumber);
console.log(typeof studentNumber);






let firstName= "Ömer";
var lastName="Menekşe";
let age= 40;
const idNumber= 5152203362; 
console.log("Adı: "+ firstName+"\nSoyadı : "+ lastName+ "\nyaşı :"+age+"\nkimlik numara:"+idNumber);

