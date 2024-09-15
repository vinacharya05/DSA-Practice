//ip: [1,1,0,1,1,1,0,1,1]
//op: 3

function consecutive_ones(arr) {
    let max = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
        } else {
            if (count > max) {
                max = count;
            }
            count = 0;
        }
    }

    console.log(max);
    return max;
}

consecutive_ones([0,0,0,0,0,0])