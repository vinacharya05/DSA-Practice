//Left rotate an array by one place (Also practice right rotate an array by D places).

//Approach 1 - Store the first k=2 elements in temporary array then move the other elements by k places
// and then add temporary array at the end of the array.

//IP - [1,2,3,4,5,6,7] ,k=2
//OP - [3,4,5,6,7,1,2]
function leftRotateByDPlaces(nums, k) {
     k = k % nums.length;
     const temp = [];
     for (let i = 0; i < k; i++) {
         temp.push(nums[i]); // [1,2]
     }

     for (let i = k; i < nums.length; i++) {
         nums[i-k]= nums[i];
     }

     for (let i = nums.length - k; i < nums.length; i++) {
         nums[i] = temp[i-(nums.length - k)];
     }
     console.log(nums);
}

leftRotateByDPlaces([1,2,3,4,5,6,7], 10);

//Approach 2: We are using extra space in the first approach, so optimal approach would be to reversing the array.

function leftRotateOptimal(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
    console.log(nums);
    return nums;
}

function reverse(arr, start, end) {
    while(start < end) {
        // const temp = arr[start];
        // arr[start] = arr[end];
        // arr[end] = temp;
        [arr[start], arr[end]] = [arr[end], arr[start]];

        start++;
        end--;
    }
}

leftRotateOptimal([1,2,3,4,5,6,7], 3);