//Increment

let a=10;
a++;
console.log(a);//11
a+=5;

console.log(a);//16

a*=2;

console.log(a); //32
++a;
console.log(a); //33
console.log(a++); //33 - çünkü önce a değerini yazdırdı sonra 1 arttırdı. Post ,-Increment
console.log(a); //34 // çünkü 1 önceki satırdı a nın değeri 1 artırıldı
console.log(++a); //35 önce a değerini arttırdı. sonra a yı yazdırdı. pre-increment
console.log(a); //35 bir önceki satırda a değeri artmıştı

console.log("-------------");
// decrement

let b=20;

console.log(b); //20
console.log(b--); //20 post decremenet
console.log(b); //19
console.log(--b); //18 pre decrement
console.log(b); //18
console.log(b-=2); //16
console.log(b/=4); //4




