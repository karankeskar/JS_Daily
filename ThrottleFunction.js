// Create a Throttle function


const throttle = (func, timeout = 300)=>{
    let isWaiting = false;
    return (...args)=>{
        console.log('inner fn', args)
        if(!isWaiting){
            func.apply(this, args)
            isWaiting=true;
        timer = setTimeout(()=>{
            isWaiting = false;
        }, timeout)
    }
    }
}

const saveInput = (name)=>{
    console.log("Name", name)
}

const processChange = throttle(saveInput, 2000);

processChange("foo")
setTimeout(()=>{
    processChange("foo")
}, 1000)
setTimeout(()=>{
    processChange("foo")
}, 1500)
setTimeout(()=>{
    processChange("foo")
}, 2000)
setTimeout(()=>{
    processChange("foo")
}, 2500)