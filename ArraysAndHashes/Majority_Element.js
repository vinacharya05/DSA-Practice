// Given an array nums of size n, return the majority element.
//     The majority element is the element that appears more than ⌊n / 2⌋ times.
//     You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//Approach 1 - Brute Force
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for (const num of nums) {
        let count = 0;
        for (const n of nums) {
            if (num === n) {
                count++;
            }
        }

        if (count > (nums.length/2)) {
            return num;
        }
    }
};


// Approach 2 - Better Approach
function majorityElement_better(nums) {
    const map = {};
    for (const num of nums) {
        map[num] = map[num] + 1 || 1;
    }

    console.log(map)
    for (const key in map) {
        if (map[key] > (nums.length / 2)) {
            return key;
        }
    }

    return -1
}

// Approach 3 - Optimal
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementOptimal = function(nums) {
    let el;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count++;
            el = nums[i];
        } else if (el === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    let count1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (el === nums[i]) {
            count1++;
        }
    }

    if (count1 > (nums.length / 2)){
        return el;
    }

    return -1;
};

console.log(majorityElementOptimal([3,2,3]))