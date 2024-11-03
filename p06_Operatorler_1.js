// atama operatörü
//= yazılınca bu operatör eşitlik olayına bakmaz.
//sadece x için sadece tanımlanan değeri atama için kullanılır. de

let x=165;

// mantıksal operatörler

let= a=5;
let b="5";

//eşitlik operatörü
console.log(a==b);//bu sadece değer kontrolü yapar. veri tipi filan bakmaz
console.log("a'nın data türü "+ typeof a);
console.log("b'nın data türü "+ typeof b);

//mutlak eşitlik operatörü
console.log(a===b); // üç eşittir yaparsak değer ve data tipi kontorlü yaparç

let c=12;
let d=28;
let e=12;
let f='12';

console.log(c<d);//true

console.log(e>=c);//true

console.log(e>d); //false

//eşit değil

console.log(c!=d); //true

console.log("----------");

console.log(c!=e); //false
console.log(c!==e); //false

console.log("----------");
console.log(c!=f); //false //data tipine bakmnadan değerler eşit mi diye bakar
console.log(c!==f); //true - değerler aynı olsa bile data tipi farklı ise eşit değildir der





