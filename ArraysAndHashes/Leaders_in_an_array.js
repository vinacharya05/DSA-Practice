// If everything on the right side of the array is smaller than the current element then current element is a leader

function leaders_in_an_array(arr) {
    const leaderArray = []
    for (let i = 0; i < arr.length; i++) {
        let currentLeader = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > currentLeader) {
                currentLeader = -1;
                break;
            }
        }

        if (currentLeader !== -1) {
            leaderArray.push(currentLeader);
        }
    }

    console.log(leaderArray)
}

// Approach 2 - Optimal
// Run a for loop backwards - store the maximum and compare with the current value

function leaders_in_an_array_optimal(arr) {
    let max = -Infinity;
    const leading = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            leading.push(arr[i]);
        }
    }
}

leaders_in_an_array_optimal([10,22,12,3,0,6]);
