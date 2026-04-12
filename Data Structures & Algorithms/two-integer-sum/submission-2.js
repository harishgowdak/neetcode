class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const map = new Map(); // Value -> Original Index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            // We found the pair! Return original indices.
            return [map.get(complement), i];
        }

        // Store the current number and its index
        map.set(nums[i], i);
    }

    return [];
}
}
