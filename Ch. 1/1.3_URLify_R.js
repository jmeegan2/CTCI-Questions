/*
URLify: Write a method to replace all spaces in a string with '%20'. Y
ou may assume that the string has sufficient space at the end to hold 
the additional characters,and that you are given the "true" length of the string. 
(Note: If implementing in Java,please use a character array so that you can perform
this operation in place.)
EXAMPLE

Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

I: String with spaces
O: string with either %20 or just the original string if no spaces are present
C: optimize
E: 
*/

let URLify = (s, n = s.length) => {

    let out = ''; //this is the output value which will be displayed at the end
    let chars = 0; //way to keep count of amount of characters

    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c !== ' ') {
            chars++
        }
    }

    let spaces = n - chars;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === ' ' && spaces > 0) {
            out += '%20';
            spaces--;
        } else if (c !== ' ') {
            out += c
        }
    }

    while (spaces > 0) {
        out += '%20';
        spaces--;
    }

    return out

}

console.log(
    URLify('Mr John Smith ', 13) === 'Mr%20John%20Smith'
)