// Remove duplicates from the array

// Using Set
// const uniqueArray = (arr)=>{
//     return [...new Set(arr)];
// };


// Using foreach
// const uniqueArray = (arr)=>{
//     const result =[];
//     arr.forEach((item)=>{
//         if(!result.includes(item)){
//             result.push(item);
//         }
//     });
//     return result;
// }

// Reduce
const uniqueArray = (arr)=>{
    return arr.reduce((acc, el)=>{
        return acc.includes(el) ? acc : [...acc, el];
    },[]);
};
console.log(uniqueArray([1,2,2,1]))