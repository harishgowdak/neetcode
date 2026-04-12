class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const lookup = {}

        for (let char of s) {
            lookup[char] = (lookup[char] || 0) + 1;
        }

        for (let char of t) {
            if(!lookup[char]) {

                return false;
            } else {
                lookup[char] -=1;
            }
        }

        return true
    }
}
