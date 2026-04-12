class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const isAlphaNumeric = (char) => /[a-z0-9]/i.test(char);

        while(left < right) {

            if(!isAlphaNumeric(s[left])){
                left++;
                continue;
            }

            if(!isAlphaNumeric(s[right])){
                right--;
                continue;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
