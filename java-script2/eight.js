// const myNum = [1,2,3,4]
// const myTotal = myNum.reduce(function(acc,currval){
//     console.log(`acc is ${acc} and currval is ${currval}`);
    
//     return acc+currval
// },0)

// console.log(myTotal);

const shoppingCart = [

{
    itemName : "phone",
    price : 29999

},
{
    itemName : "laptop",
    price : 99999

},
{
    itemName : "mouse",
    price : 2000

},
{
    itemName : "kayboard",
    price : 3000

},

]

const totalAmount = shoppingCart.reduce( (acc,item)=> acc + item.price,0)
console.log(totalAmount);
