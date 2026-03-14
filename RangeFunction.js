// Write a range function lets say from 1 to 50

// Super low level using forloop
// const range = (start, end)=>{
//     let result = []
//     for(let i=start; i<=end; i++){
//         result.push(i)
//     }
//     return result
// }


// console.log(range(1,50));

// using Array and Keys

const range = (start, end)=>{
    return [...Array(end-start).keys()].map((el)=>el+start);
}


console.log(range(1,50))

