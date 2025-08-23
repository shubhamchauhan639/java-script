//immediately invoked function expression (IIFE)

(function chai(){
    console.log("hello world");

}) ();

((name)=>{
    console.log(`hello ${name}`);   
}) ("shubham");