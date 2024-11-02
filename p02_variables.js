//javascriptte 3 farklı variable tanımlanır
/*
let ve var ile oluşturulan variable'lara atanan değerler değiştirilebilir özelliktedir.

const ile oluşturulan variabllara atana değer değiştirilemezler

let ve var ile tüm data türlerini oluşturabiliriz. arasındaki fark var belli bir scope içerisinde çalışırken let global olarak 
çalışırz.

*/


let firstName= "Ömer";

var lastName="Menekşe";

let age= 40;

const idNumber= 5152203362; // değiştirilemez data tipidir

const schoolName= "Eskişehir";

console.log("Adı :" +firstName);

console.log("soyadı :"+ lastName);

console.log("yaşı: "+ age);

console.log("id:"+ idNumber);
console.log("------------");

firstName= "Ömer1";
lastName= "Menek";
//idNumber= 112313; bu hatalı const ile bir değişken oluşturduğumuzda değiştiremeyiz
 console.log(firstName);
 console.log(lastName);
 console.log("okulu :" + schoolName);






