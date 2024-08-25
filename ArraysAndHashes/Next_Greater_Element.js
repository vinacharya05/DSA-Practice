function next_greater_element(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
       while(stack.length && arr[i] > arr[stack[stack.length - 1]]) {
           result[stack.pop()] = arr[i];
       }
       stack.push(i);
        console.log(stack);
    }

    return result;
}

console.log(next_greater_element([1,4,6,3,2,7]));


let mp = new Map();
mp.set(1, 3);
mp.set(2,2);
console.log("###",mp)
const list = [...mp];

console.log("###",list)

