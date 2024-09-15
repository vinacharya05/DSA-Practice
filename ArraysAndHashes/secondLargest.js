//Brute force 0(nlogn) + o(n)
// function secondLargest(arr) {
//     arr.sort((a, b) => a-b);
//     //[1,2,4,5,7,7]
//     const arrLen = arr.length;
//     let largest = arr[arrLen - 1]
//     let secondLargest = arr[arrLen - 2];
//     for (let i = arrLen - 2; i >= 0; i--) {
//         if (arr[i] !== largest && largest > arr[i]) {
//             secondLargest = arr[i];
//             break;
//         }
//     }
//
//     return secondLargest;
//
// }

//Better approach without sorting
// function secondLargest(arr) {
//     //find largest
//     let largest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//
//     let secondLargest = -1;
//     for (let i= 0; i < arr.length; i++) {
//         if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
//
// }

//Best approach
function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = Number.MIN_VALUE;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log("Second Largest =>", secondLargest([1,2,4,3,8,5,5]));