//Approach - Brute force
//IP: a = [1,2,2,3,3,4,5,6] , b = [2,3,3,5,6,6,7]
//OP: [2, 3, 3, 5, 6]

function interSection_of_two_Arrays(a, b) {
    const visited = [];
    const intersection = []
    for (let i=0; i < a.length; i++) {
        for (let j=0; j < b.length; j++) {
            if (a[i] === b[j] && !visited[j]) {
                intersection.push(a[i]);
                visited[j] = 1;
                break;
            }

            if (b[j] > a[i]) break;
        }
    }
    console.log(intersection);
    return intersection;
}

interSection_of_two_Arrays([1,2,2,3,3,4,5,6], [2,3,3,5,6,6,7]);

//Optimal Approach
function interSection_of_two_Arrays_optimal(a, b) {
      let i = 0, j =0;
      const n = a.length, m = b.length;
      const intersection = [];

      while(i < n && j < m) {
          if (a[i] < b[j]) {
              i++;
          } else if (b[j] < a[i]) {
              j++;
          } else {
              intersection.push(a[i]);
              i++;
              j++;
          }
      }
    console.log(intersection);
    return intersection;
}

interSection_of_two_Arrays_optimal([1,2,2,3,3,4,5,6], [2,3,3,5,6,6,7]);
