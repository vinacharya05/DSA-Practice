//IP: [1,1,2,3,3,4,4]
//OP: 2

function number_appears_once(arr) {
    let onlyOnce = 0;

    for (const a of arr) {
        onlyOnce = onlyOnce ^ a;
    }
    console.log(onlyOnce);
    return onlyOnce;
}

number_appears_once([1,1,2,3,3,4,4]);