const user = {
userName: "shubhanm",
price : 999,

welcomeMessage: function() {
    console.log(`${this.userName} ,welcome to website`);
    
}
}
// user.welcomeMessage();

// const chai = ()=>{
//     let userName = "shubham";
//     console.log(this.uswerName);
    
// }

// chai(); 
// *********************************************************basic arrow function **************************************************************************************************
// const addTwoNumbers = (num1 , num2) => {
//     return num1 + num2;

// }
// console.log(addTwoNumbers(5,10));

// implicet return ********************************************************************


const addTwoNumbers = (num1 , num2) =>  num1 + num2;


console.log(addTwoNumbers(5,10));