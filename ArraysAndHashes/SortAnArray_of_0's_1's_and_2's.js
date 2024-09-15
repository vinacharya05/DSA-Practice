// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}
// Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

// Approach 1 - Brute force

function sortAnArray_of_0S_1S_and_2S(arr) {
    console.log(arr.sort((a,b) => a-b));
}

function sortAnArray_of_0S_1S_and_2S_better(arr) {
    let count0 = 0, count1= 0, count2 = 0;
    for (const a of arr) {
        if (a === 0) {
            count0++;
        } else if (a === 1) {
            count1++
        } else {
            count2++;
        }
    }

    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }

    for (let j = count0; j < count0 + count1; j++) {
        arr[j] = 1;
    }

    for (let k = count0 + count1; k < arr.length; k++) {
        arr[k] = 2;
    }
    console.log(arr);
}

//Approach 3 - Optimal (Dutch national flag algorithm)
function sortAnArray_of_0S_1S_and_2S_optimal(arr) {
    let mid = 0, low = 0, high = arr.length - 1;

    while(mid <= high) {
        if (arr[mid] === 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            swap(arr, mid, high);
            high--;
        }
    }

    console.log(arr)
}

function swap(arr, start, end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

sortAnArray_of_0S_1S_and_2S_optimal([0,1,1,0,1,2,1,2,0,0,0])