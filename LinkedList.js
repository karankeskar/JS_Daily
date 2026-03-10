// Linear Data Structure
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const freq = {}
    
    // Count every letter in s
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1
    }
    
    // Cancel out every letter using t
    for (const char of t) {
        freq[char] = (freq[char] || 0) - 1
        
        // If negative — t has a letter s doesn't
        if (freq[char] < 0) return false
    }
    
    return true
}