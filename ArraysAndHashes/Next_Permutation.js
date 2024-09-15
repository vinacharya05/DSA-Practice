// Given an Array 'A' of "N" Integers
// You have to return the lexicographically next to greater permutation

// Example 1:
// IP: [2,1,5,4,3,0,0]
// OP: [2,3,0,0,1 ,4,5]

// Optimal Approach

function next_Permutation(a) {
    //longer prefix match
    const n = a.length;
    let ind = -1;
    for (let i = n-2; i >= 0; i--) {
        if (a[i] < a[i+1]) {
            ind = i;
            break;
        }
    }

    if (ind === -1) return reverseArray(a, 0, n-1);
    // find the element which is greater and closer to 'ind'
    for (let i = n-1; i >= ind; i--) {
        if (a[i] > a[ind]) {
            console.log(a[i]);
            //swap
            const temp = a[i];
            a[i] = a[ind];
            a[ind]= temp;
            break;
        }
    }

    console.log([...a]);
    reverseArray(a, ind + 1, n -1);
    console.log(a);
}

function reverseArray(a, start, end) {
    while (start < end) {
        const temp = a[start];
        a[start] = a[end];
        a[end] = temp;
        start++;
        end--;
    }
}

next_Permutation([2,1,5,4,3,0,0])
