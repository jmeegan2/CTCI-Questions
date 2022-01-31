/**
CTCI - 1.6
String Compression: 
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string 
has only uppercase and lowercase letters (a - z). 

I; string
O: string
C: optimize
E: empty string or same length as original than make the output the same as the input
*/

let stringCompression = (s) => {
    let out = '';  //new string that will be added to
    let count = 1;

    // for loop to go through the characters
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        let next = s[i + 1];
        if (cur === next) {
            count++
        } else {
            out += cur + String(count);
            count = 1;
        }
    }
    return out.length < s.length ? out : s;
}

console.log(
    stringCompression('aabcccccaaa') === 'a2b1c5a3',
    stringCompression('aa') === 'a1',          // this will return false
    stringCompression('aaAAaa') === 'aaAAaa',
    stringCompression('aaaAAaa') === 'a3A2a2',
    stringCompression('') === ''
);