// let marks = {
    // harry: 98,
    // rohan: 70,
    // aakash: 73
// };
// 
// for (let i = 0; i < Object.keys(marks).length; i++) {
    // let key = Object.keys(marks)[i];
    // console.log(key + " : " + marks[key]);
// }

let correctNumber = 7;
let guess;

do {
    guess = prompt("Enter the number: ");
    if (guess != correctNumber) {
        console.log("Try again");
    }
} while (guess != correctNumber);

console.log("Correct Number!");
