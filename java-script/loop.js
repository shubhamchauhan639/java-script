// let obj = { harry: 98, rohan: 70, aakash: 73 };

// let keys = Object.keys(obj);
// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i] + " got " + obj[keys[i]]);
// }
// for of loop
let correctNumber = 7;
let guess;

while (guess !== correctNumber) {
  guess = Number(prompt("Enter the number: "));
  if (guess !== correctNumber) {
    console.log("Try again");
  }
}
console.log("Correct number entered!");
