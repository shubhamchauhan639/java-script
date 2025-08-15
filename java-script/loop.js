let obj = { harry: 98, rohan: 70, aakash: 73 };

let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + " got " + obj[keys[i]]);
}
// for of loop
