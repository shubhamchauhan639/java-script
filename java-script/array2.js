const marvelHeros = ["thor" , "ironman" , "spiderman"]
const dcHeros = ["batman" , "superman" , "flash"] 
// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

const allheros = marvelHeros.concat(dcHeros)
console.log(allheros);
const marvelallnew = [...marvelHeros,...dcHeros]
console.log(marvelallnew);

let a = 1
let b =2
let c =3

console.log(Array.of(a,b,c));

