const tinderUser = {}

tinderUser.userName = "Shubham",
tinderUser.userID = "546",
tinderUser.userIsLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "shubh.gmail.com",
    fullName :{
        firstName: "Shubham",
        lastName: "chauhan"
    }
}

console.log(regularUser.fullName.firstName);

const obj = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};

const obj3 = {...obj, ...obj2} ;
console.log(obj3);

const users = [
    {
        id : 1,
        email: "jsn@gmail.com",
    },
    {
        id : 1,
        email: "jsn@gmail.com",
    },
    {
        id : 1,
        email: "jsn@gmail.com",
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Shubham Chauhan",
}
const{price}= course;
console.log(price);
