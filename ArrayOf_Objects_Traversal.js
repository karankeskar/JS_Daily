// Get all the names from the given array of objects, return an array of names
const users = [
  {
    id: 1,
    name: "John",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Dave",
    isActive: false,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: true,
    age: 30,
  },
];

// let names = [];
// Simple for loop
// for(let i=0;i<users.length;i++){
//     names.push(users[i].name)
// }
// For each loop
// users.forEach((user)=>{
//     names.push(user.name)
// })
// Map function
// const names = users.map((user)=>user.name);
// console.log(names);

// Now get back active users

// Simple for loop
// let names = []
// for(let i=0;i<users.length;i++){
//     if(users[i].isActive === true){
//         names.push(users[i].name)
//     }
// }
// console.log("names", names);

// For map and filter loop
// const names = users.filter((user)=>user.isActive).map((user)=>user.name);
// Sorting the array by age

// users.sort((user1, user2)=>(user1.age<user2.age? -1:1)) // Sort operator mutates an array

// let names = [];
// // Simple for loop
// for(let i=0;i<users.length;i++){
//     names.push(users[i].name)
// }
// console.log(names)

// Using sort, filter, map
const names = users
  .sort((user1, user2) => (user1.age < user2.age ? -1 : 1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log("names", names);
