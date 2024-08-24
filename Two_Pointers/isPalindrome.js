/* A phrase is a palindrome if, after converting all uppercase letters into lowercase
letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
    Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
    Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.*/

// 1st Approach
var isValidPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for (let i=0, j=(str.length - 1); i <= j; i++,j--) {
        if (str[i] !== str[j]) return false;
    }

    return true;
};

//2nd Approach
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l=0, r=s.length - 1;
    while(l < r) {
        while(l < r && !isAlphaNumeric(s[l].toLowerCase())) l++;
        while(l < r && !isAlphaNumeric(s[r].toLowerCase())) r--;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
};

var isAlphaNumeric = function(c) {
    return "A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0) || "a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0) || "0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0);
}

//const isPalindrome = isValidPalindrome("A man, a plan, a canal: Panama");
