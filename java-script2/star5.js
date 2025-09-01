let n = 6;
for (let i = 0; i < n; i++) {
   let star = ""
    for (let j = 0; j < n-(i+1); j++) {
     star = star+" "
    }
     for (let k = 0; k < i+1; k++) {
        star = star+"*"
    }
    console.log(star);
}

