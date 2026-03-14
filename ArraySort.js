// Sorting an array using array.sort array.sort only works for primitives



const arr = [3,5,1,8]

// Sort mutates the current array
// const result = arr.sort((a,b)=>a<b? 1: -1);

// if the compare function let's say a-b >0 sort b before a, a-b<0 sort a before b
const result1 = arr.sort((a,b)=>a-b)


console.log(arr, result1)

// Sorting object properties
const books = [
    {name:"Harry Potter", author:"JK Rowling"},
    {name:"Percy Jackson", author:"Marie Lu"},
    {name:"abc", author:"def ghi"}
]

books.sort((a,b)=>{
    const authorLastName1 = a.author.split(' ')[1];
    const authorLastName2 = b.author.split(' ')[1];
    return authorLastName1 < authorLastName2 ? -1:1;
});

console.log(books);