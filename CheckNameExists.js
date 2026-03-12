//  Check that the user with such name exists in array of objects

const users = [
    {
        id:1,
        name:"Jack",
        isActive:true
    },
    {
        id:2,
        name:"John",
        isActive:false
    },
    {
        id:3,
        name:"Mike",
        isActive:true
    }
]

// Super Low-Level
// const isNameExists = (name, users)=>{
//     let exists = false;
//     for(let i=0;i<users.length;i++){
//         if(users[i].name === name){
//             exists = true
//         }
//     }
//     return exists;
// }
// let name1 = "Jacky"
// console.log(isNameExists(name1, users))

// using array.some
// const isNameExists = (name, arr)=> arr.some((el)=>el.name === name)
// let name1 = "Jack"

// using array.find
// const isNameExists = (name, arr)=>{
//     const el = arr.find((el)=>el.name === name);
//     return el
// }

// Using array.findIndex
const isNameExists = (name, arr)=>{
    const index = arr.findIndex((el)=>el.name === name);
    return index >= 0;
}
console.log(isNameExists("Jack", users));