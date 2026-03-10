// Write a function to acheive multiply(a)(b) and returns the product of a & b

// const multiply=(num1)=>{
//     return(num2)=>{
//         return num1*num2;
//     };
// };

// const multiply =(num1)=>(num2)=>num1*num2
// console.log(multiply(2)(3));
// 
const curry = function(fn){
    var arity = fn.length;
    console.log("arity",arity);
    return function f1(...args){
        if(args.length>=arity){
            console.log("enough parameters");
            return fn(...args);
        }
        else{
            console.log("need more parameters");
            return function f2(...moreArgs){
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs)
            }
        }
    }
}



const curriedSum = curry((a, b, c)=>a+b+c);
const partiallyCurriedSum = curriedSum(1)
console.log(partiallyCurriedSum(2, 3));