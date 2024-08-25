/*
Given an integer array nums, return true if any value appears more than once in the array,
 otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
*/

//First Approach
function hasDuplicate(nums) {
    const countMap = {}
    for (const num of nums) {
        countMap[num] = countMap[num]+1 || 1;
    }

    const hasDup = false;
    for (const key in countMap) {
        if (countMap[key] > 1) {
            return true;
        }
    }
    return hasDup;
}

//Second Approach
function hasDuplicate2(nums) {
    const hashTable = {}
    for (const num of nums) {
        if (num in hashTable) {
            return true;
        }
        hashTable[num] = 1;
    }

    return false;
}

hasDuplicate2([1,2,3,3,4]);
