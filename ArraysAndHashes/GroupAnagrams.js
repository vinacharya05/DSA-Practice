/*Given an array of strings strs, group the anagrams together.
You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const group = {};
    for (const str of strs) {
        const key = generateFrequency(str);
        if (group[key]) {
            group[key].push(str);
        } else {
            group[key]= [str];
        }
    }

    return Object.values(group);
};

var generateFrequency = function(str) {
    const count = [];
    for (const c of str) {
        const pos = c.charCodeAt(0) - 97;
        count[pos] = count[pos] + 1 || 1;
    }
    return count.join('#');
}

console.log(groupAnagrams(["a"]))