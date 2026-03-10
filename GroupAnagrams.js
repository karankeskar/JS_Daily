var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let chars = Array.from(str);
        console.log("chars", chars);
        chars.sort();
        let key = chars.join("");
        console.log("key", key);
        if (!map.has(key)) map.set(key, []);
        console.log('map',map)
        map.get(key).push(str);
        console.log('map after push',map)
    }
    return Array.from(map.values());
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])