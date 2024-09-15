/*Given an array nums containing n distinct numbers in the range [0, n], return the
 only number in the range that is missing from the array.

    Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

    Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.*/

    /**
 * @param {number[]} nums
 * @return {number}
 */

//Approach 1 -> Brute force
var missingNumber = function(nums) {
    const n = nums.length;
    let missing = -1;
    for (let i = 0; i <= n; i++) {
        let found = true;
        for (let j = 0; j < n; j++) {
            if (i === nums[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            missing = i;
            break;
        }
    }

    return missing;
};

//Approach 2 - better

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber1 = function(nums) {
    const visited = new Array(nums.length + 1).fill(0);
    console.log("Vrrr", [...visited]);
    let missing = -1;
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== undefined
        ) {
            visited[nums[i]] = 1;
        }
    }
    console.log("V", visited);
    for (let i = 0; i <= nums.length; i++) {
        if (visited[i] === 0) {
            missing = i;
            break;
        }
    }

    return missing;
};

missingNumber1([0, 1]);

// Approach 3 - Optimal Approach
var missingNumber = function(nums) {
    const n = nums.length;
    const totalSum = (n * (n + 1))/2;
    let sum = 0;

    for (const num of nums) {
        sum+= num;
    }

    return totalSum - sum;
};

