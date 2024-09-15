//Approach 1
//IP: [1,0,2,3,2,0,0,4,5,1]
//OP: [1,2,3,2,4,5,1,0,0,0]

function moveZeroesToEnd(arr) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }

    if (temp.length === arr.length) return arr;
    for (let i= 0; i < arr.length; i++) {
        if (temp[i]) {
            arr[i] = temp[i];
        } else {
            arr[i] = 0;
        }
    }

    return arr;
}

console.log("moveZeroesToEnd", moveZeroesToEnd([1,0,2,3,2,0,0,4,5,1]));

// Approach 2
// Using two pointers
// At first find out the first zero in the array and 'j' will point to that ('j' will always point to the 0's in the array)
// and 'i' will iterate through the array. If 'j' is 0 and 'i' is non-zero then swap.


function moveZeroesToEndOptimize(arr) {
    let j = -1;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return arr;

    for (let i = j + 1; i < len; i++) {
        if (arr[i] !== 0) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }

    return arr;
}

console.log("moveZeroesToEnd", moveZeroesToEndOptimize([1,0,2,3,2,0,0,4,5,1]));
