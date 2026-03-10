//  Write a function to concatenate 2 arrays

// const mergeArray = (arr1, arr2)=>{
//     arr1.push(...arr2);//mutates array
//     return arr1;
// }

// // Use concate
// const mergeArray = (arr1, arr2)=>{
//     return arr1.concat(...arr2);
//     // return arr1;
// }

// Without concat
// The spread operator spreads the array content so if I just return [arr1, arr2] = [[1,2,3],[4,5,6]] but if I do return [...arr1,...arr2] = [1,2,3,4,5,6]
// const mergeArray = (arr1, arr2)=>{
//     return [...arr1, ...arr2]
// }
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
console.log(mergeArray(arr1, arr2), arr1, arr2);