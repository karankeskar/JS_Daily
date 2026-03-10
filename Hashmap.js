var twoSum = (nums, target) =>{
    const map = new Map();
    for(let i=0;i<nums.length; i++){
        let complement = target - nums[i];
        console.log(complement)
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set[nums[i],i]
    }
    return [];
}

twoSum([2,7,11,15],9)