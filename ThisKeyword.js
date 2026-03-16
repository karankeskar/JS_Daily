// This Key word

// function getItem(){
//     console.log(this);//Inside function this references to the global object it may be window, undefined, it depends on the context, but if we define a function keyword without any nesting then is is a window
// }

// getItem(); //


// const item = { // This inside an object will always reference this object
//     title:"Bali",
//     getItem(){
//         console.log("this", this)
//     },
// };

// item.getItem();

// Inside class this references to the instance of the class
// class Item{
//     title="Bali"
//     getItem(){
//         console.log("This", this);
//     }
// }

// const item = new Item();
// item.getItem()


// Function inside class this is will return undefined as you specify the function keyword
// class Item{
//     title="Bali"
//     getItem(){
//         function someFun(){
//             console.log("this", this)
//         }
//         someFun()
//     }
// }

// const item = new Item();
// item.getItem()


// Map function inside getItem method inside the class, will again return undefined thrice as it is mapping over 3 elements in an array.

// class Item{
//     title="Bali"
//     getItem(){
//         [1,2,3].map(function (item){
//             console.log("this", this)
//         })
//     }
// }

// const item = new Item();
// item.getItem()



// SOlution to using function keyword inside the class method

// class Item{
//     title="Bali"
//     getItem(){
//         const this_ = this;
//         function someFun(){
//             console.log("this", this_)
//         }
//         someFun()
//     }
// }

// const item = new Item();
// item.getItem()


// Solution more simpler and newer to use by using arrow function

class Item{
    title="Bali"
    getItem(){
        const someFun=()=>{
            console.log("this", this)
        }
        someFun()
    }
}

const item = new Item();
item.getItem()