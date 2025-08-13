const myArray =  [1 ,2 ,3 ,4, 5];
const myHeroees = ["thor" , "ironman", "captainamerica", "hulk"];
const myArray2 = new Array(1, 2, 3, 4, 5);
console.log(myArray[1]);
console.log(myHeroees[2]);
console.log(myArray2[3]);

myArray.push(6);
myArray.push(7);
myArray.pop();
console.log(myArray);

//slice & splice
console.log("A",myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1, 3);
console.log("c",myArray);

console.log(myn2);
