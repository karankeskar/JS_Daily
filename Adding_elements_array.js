// write a function which gets an array and an element and returns a array with this element at the end

const numbers = [1,2];

// const append= (arr, el)=>{
//     return [...arr, el]; // creates a new arr
// }

console.log(append(numbers, 3));// [1,2,3]
console.log(numbers); // [1,2]

const append = (arr, ele)=>{
    arr.push(ele);
    return arr;// modifies the existing array
}
console.log(append(numbers, 3));//[1,2,3]
console.log(numbers);//[1,2,3]
