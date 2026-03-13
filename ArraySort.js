// Sorting an array using array.sort

const arr = [3,5,1,8]

// Sort mutates the current array
// const result = arr.sort((a,b)=>a<b? 1: -1);

// if the compare function let's say a-b >0 sort b before a, a-b<0 sort a before b
const result1 = arr.sort((a,b)=>a-b)


console.log(arr, result1)