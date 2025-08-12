let mydate = new Date() 
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

let createdate = new Date (2025 , 0 ,5) ;
console.log (createdate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
