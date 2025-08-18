let marks = {
    harry: 98,
     rohan: 70,
     aakash: 73
 };
 
 for (let i = 0; i < Object.keys(marks).length; i++) {
 let key = Object.keys(marks)[i];
 console.log(key + " : " + marks[key]);
}

