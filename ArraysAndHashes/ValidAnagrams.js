
// 1st Approach
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const charCountMap1 = {};
    const charCountMap2 = {};

    for (let i=0; i < s.length; i++) {
        charCountMap1[s[i]] = charCountMap1[s[i]] + 1 || 1;
        charCountMap2[t[i]] = charCountMap2[t[i]] + 1 || 1;
    }

    for (const key in charCountMap1) {
        if (charCountMap1[key] !== charCountMap2[key]) {
            return false
        }
    }

    return true;
}

// 2nd Approach
function isAnagram1(s, t) {
    //if (s.length !== t.length) return false;

    const s1 = s.toLowerCase().replace(" ", '');
    const s2 = t.toLowerCase().replace(" ", '');
    const count = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        const pos = s1.charCodeAt(i) - 97; //ASCII value of a is 97
        count[pos]= count[pos] + 1 || 1;
    }

    for (let i = 0; i < s2.length; i++) {
        const pos = s2.charCodeAt(i) - 97; //ASCII value of a is 97
        count[pos] = count[pos] - 1 || -1;
    }

    for (const c of count) {
        if (c !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram1("dormitory", "dirty room"));

