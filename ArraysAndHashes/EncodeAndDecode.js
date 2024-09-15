function encode(strs) {
    let encodedString = "";
    for (const str of strs) {
        encodedString += str.length + '#' + str
    }
    console.log(encodedString);
    return encodedString;
}

function decode(str) {
   let i = 0;
   const result = [];
   while(i < str.length) {
       let j = i;
       while(str[j] !== '#') {
           j++;
       }
       console.log(j, str[i]);
       const len = j + 1 + +str[i];
       console.log("###", len);
       result.push(str.slice(j + 1, len));
       i = j + 1 + +str[i];
   }
    console.log(result);
   return result
}

encode(["neet", "code", "love", "you"]);
decode("4#neet4#code4#love3#you")


