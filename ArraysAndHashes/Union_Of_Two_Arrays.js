//IP:  arr1 = [1,1,2,3,4,5] , arr2 = [2,3,4,4,5]
//OP: Union = [1,2,3,4,5]

//Brute force - Approach 1

function union_Of_Two_Arrays(arr1, arr2) {
    const storeUnique = new Set();
    for (const a1 of arr1) {
        storeUnique.add(a1); //n
    }

    for (const a2 of arr2) {
        storeUnique.add(a2); //m
    }

    const unique = Array.from(storeUnique).sort((a, b) => a-b);

    console.log(unique);
}

union_Of_Two_Arrays([1,1,3,4,5], [2,3,4,4,5]);

//Approach 2 - Two pointers (Sorted Array)

function union_of_two_arrays_optimal(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    const uniqueArray = [];

    let i = 0 ,j = 0;
    while (i < aLen && j < bLen) {
        if (a[i] <= b[j]) {
            if (uniqueArray.indexOf(a[i]) === -1) {
                uniqueArray.push(a[i]);
            }
            i++;
        } else {
            if (uniqueArray.indexOf(b[j]) === -1) {
               uniqueArray.push(b[j]);
            }
            j++;
        }
    }

    while (i < aLen) {
        if (uniqueArray.indexOf(a[i]) === -1) {
            uniqueArray.push(a[i]);
        }
        i++;
    }

    while (j < bLen) {
        if (uniqueArray.indexOf(b[j]) === -1) {
            uniqueArray.push(b[j]);
        }
        j++;
    }

    console.log("Unique Array", uniqueArray);
    return uniqueArray;
}

union_of_two_arrays_optimal([1,1,3,4,5], [2,3,4,4,5])