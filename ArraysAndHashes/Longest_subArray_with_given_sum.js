//IP: [1,2,3,1,1,1,1,4,2,3], k = 3 (Given sum)
//OP: [1,1,1]

// Approach 1 - Brute force - 1

function longestSubArray(arr, k) {
    let max= 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
                max = Math.max(max, j - i + 1);
            }

        }
    }

    console.log(max)
}

// Approach 1 - Brute force - 2
function longestSubArray1(arr, k) {
    let max=0;
    for (let i = 0; i < arr.length; i++) {
        //let sum = 0;
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            if (sum === k) {
                max = Math.max(max, j - i + 1);
            }
        }
    }

    console.log(max);
    return max;
}

// Approach 2 - Better Approach
function longest_subArray_better(arr, k) {
    let longest = 0;
    let sum = 0;
    const map = {};
    for (let i= 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === k) {
            longest = Math.max(longest, i+1);
        }

        const rem = sum - k;
        if (map[rem] !== undefined) {
           longest = Math.max(longest, i - map[rem]);
        }
        if (map[sum] === undefined) {
            map[sum] = i;
        }
    }
   // console.log(longest)
}


// Approach 2 - Optimal Approach
function longest_subArray_optimal(arr, k) {
    let maxLen = 0;
    let sum = arr[0];
    let right = 0;
    let left = 0;
    const n = arr.length;
    while(right < n) {
        while(left <= right && sum > k) {
            sum -= arr[left];
            left++;
        }

        if (sum === k) {
            console.log("AAA",sum, right ,left);
           // console.log(right, left)
            maxLen = Math.max(maxLen, right - left + 1);
        }
        right++;
        if (right < n) {
            sum += arr[right];
        }

    }
    console.log(maxLen)
    return maxLen;
}
longest_subArray_optimal([1,2,3,1,1,1,1,4,2,3], 3)
