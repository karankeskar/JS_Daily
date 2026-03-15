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

class Item{
    title="Bali"
    getItem(){
        console.log("This", this);
    }
}

const item = new Item();
item.getItem()