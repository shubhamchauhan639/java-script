let age = 15;
if (age > 10 && age < 20 )
{
    console.log("you lie bw 10 to 20 ")

}
    else
{
        console.log("you lie outside 10 to 20")
    }
// switch case

let month = 2
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        
        default: 
        console.log("invalid month");
        break;
        
}

//  check no is divisible by 2 and 3

let num = 8 
if (num % 2 === 0 && num % 3 ===0)
{
    console.log("divisible by 2 nad 3");
}
else 
{
    console.log("not divisible by 2 and 3");
}

// you can drive or not
let agee = 20;
let message = (agee >= 18) ? "you can drive" : "you can not drive "
console.log(message);
    