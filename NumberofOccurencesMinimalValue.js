// Write a program to find the number of occurence of minimum value in the list

// console.log(Math.min(...[10,28,9,23,8]))

const arr = [1,2,3, 0, 1, 0, 0, 1, 1]
const minValue = Math.min(...arr);
const minArr = arr.filter((el)=>el===minValue)
console.log(minArr, minArr.length);