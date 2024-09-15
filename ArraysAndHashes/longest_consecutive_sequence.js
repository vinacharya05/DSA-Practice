// Approach 1 - Brute force
//[102, 4, 100, 101, 3, 2, 1, 1]
function longest_consecutive_sequence(arr) {
    let longest = 1;
    let longSequence = []
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        let count = 0;
        const sequence = []
        while(ls(arr, x)) {
            sequence.push(x);
            count++;
            x = x + 1;
        }
       // console.log(count);
        longest = Math.max(count, longest);
        if (sequence.length > longSequence.length) {
            longSequence = sequence;
        }
    }
    console.log(longest, longSequence);
}

function ls(arr, x) {
    for (const a of arr) {
        if (a === x) {
            return true;
        }
    }
    return false;
}

//Approach 2 - Better Approach
function longest_consecutive_sequence_better(arr) {
    let longest = 1;
    let lastSmallest = -Infinity;
    let count = 1;
    arr.sort((a, b) => a-b);
    for (const a of arr) {
        if ((a - lastSmallest) === 1) {
            lastSmallest = a;
            count++;
        } else if ((a - lastSmallest) !== 0) {
            lastSmallest = a;
            count = 1;
        }

        longest = Math.max(count, longest);
    }
    console.log("Longest ", longest);
}

//Approach 3 - Optimal
function longest_consecutive_sequence_optimal(arr) {
    const nums = new Set(arr);
    let longest = 1;
    for (const num of nums) {
        let count = 0;
        if (nums.has(num - 1)) continue;
        let x = num;
        while (nums.has(x)) {
            count++;
            x++;
        }

        longest = Math.max(count, longest);
    }

    console.log(longest);
}

longest_consecutive_sequence_optimal([102, 101,103, 4, 1,2,2,2,3, 4, 100, 3, 2, 1, 1, 101])