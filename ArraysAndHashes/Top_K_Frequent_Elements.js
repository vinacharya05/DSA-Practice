/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//1st Approach without sorting
var topKFrequent = function(nums, k) {
    const map = {};
    const bucket = [];
    const result = [];
    //{1: 1, 2: 2, 3: 3}
    for (const num of nums) {
        map[num] = map[num] + 1 || 1;
    }
    console.log(map);

    for (const key in map) {
        if (bucket[map[key]]) {
            bucket[map[key]].push(key);
        } else {
            bucket[map[key]] = [key];
        }
    }
    console.log(bucket);

    for (let i=bucket.length - 1; i >=0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if(result.length >= k) break;
    }

    return result;
};

console.log(topKFrequent([1,1,1,2,2,3,3,4], 2));

//2nd approach with sorting

function topKFrequent(arr, N, K)
{
    let mp = new Map();
    // Put count of all the
    // distinct elements in Map
    // with element as the key &
    // count as the value.
    for (let i = 0; i < N; i++) {

        // Get the count for the
        // element if already
        // present in the Map or
        // get the default value
        // which is 0.
        if(!mp.has(arr[i]))
            mp.set(arr[i],0);

        mp.set(arr[i],
            mp.get(arr[i]) + 1);
    }

    // Create a Priority Queue
    // to sort based on the
    // count or on the key if the
    // count is same
    let queue=[...mp];

    queue.sort(function(a,b){
        if(a[1]==b[1])
        {
            return b[0]-a[0];
        }
        else
        {
            return b[1]-a[1];
        }
    });

    console.log(K + " numbers with most "+"occurrences are: ")
    for(let i=0; i<K; i++)
    {
        console.log(queue[i][0]+" ");
    }
}
