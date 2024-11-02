/*

data casting (veri dönüştürme) işleminde 
bir veri türünü başka bir veri türüne dönüştürme işlemidir
bu işlem genellikle dataları kullanım senaryosunu uygun hale getirmek için yapılır


*/


// stringden numbera dönüştürme

let str= "123";

let num= Number(str);

console.log(str);
console.log("typeof str:" + typeof str);
console.log(num);
console.log("typeof num:"+ typeof num );

console.log("++++++++++++");

//number toı string


let str2= String(num);
console.log(str2);
console.log("type of str2 ;"+ typeof str2);


//string to boolean

let str3= 'true';

let bool1= Boolean(str3);
console.log(bool1);
console.log("type of bool1 ;"+ typeof bool1);


console.log("++++++++++++");

//boolean default değeri 

//number to boolead

let num1=0;


let bool2= Boolean(num1);
console.log(bool2);
console.log("type of bool2 ;"+ typeof bool2);

//javascriptte bir sayının değer 0 veya NaN ise boolean'a cast edilirse false döner. 
//eğer sıfırdan farklı bir sayı atanırsa bize true değeri döndürür.

//Boolean to nunmber

let bool3=true;

let num2= Number(bool3);

console.log(num2);
console.log("type of num2 ;"+ typeof num2);// true ise 1, false ise 0 döndürür

