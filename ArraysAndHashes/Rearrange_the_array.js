// Re-arrange the array in alternating positive and negative items.
// Scenario 1 - Array will have equal number of positive and negative items.
// IP: [3, 1, -2, -5, 2, -4]
// OP: [3, -2, 1, -5, 2, -4]

function rearrange_the_array(arr) {
    // Seperate Positive and Negative integers into two different arrays
    const pos = [], neg = [];
    for (const a of arr) {
        if (a > 0) {
            pos.push(a);
        } else {
            neg.push(a);
        }
    }

    for (let i = 0; i < (arr.length/2); i++) {
        arr[i*2] = pos[i];
        arr[i*2+1] = neg[i];
    }

}

//Optimal Approach - Equal number of positive and negative integers
function rearrange_the_array_optimal(arr) {
    const ans = [];
    let posIndex = 0, negIndex = posIndex + 1;
    for (let i= 0; i< arr.length; i++) {
        if (arr[i] > 0) {
            ans[posIndex] = arr[i];
            posIndex+=2;
        } else {
            ans[negIndex] = arr[i];
            negIndex+=2;
        }
    }

    console.log(ans);
}

// Approach 3 - To solve if number of positive and negative integers are not equal.

function rearrange(arr) {
    const pos = [], neg = [];
    for (const a of arr) {
        if (a > 0) {
            pos.push(a);
        } else {
            neg.push(a);
        }
    }

    if (pos.length > neg.length) {
        for(let i = 0; i < neg.length; i++) {
            arr[i*2] = pos[i];
            arr[i*2+1] = neg[i];
        }

        let ind = neg.length * 2;
        for (let i = neg.length; i < pos.length; i++) {
            arr[ind] = pos[i];
            ind++;
        }
    } else {
        for(let i = 0; i < pos.length; i++) {
            arr[i*2] = pos[i];
            arr[i*2+1] = neg[i];
        }

        let ind = pos.length * 2;
        for (let i = pos.length; i < neg.length; i++) {
            arr[ind] = neg[i];
            ind++;
        }
    }
    console.log(arr);
}

rearrange([1, 2, -4, -5, 3, 6]);
