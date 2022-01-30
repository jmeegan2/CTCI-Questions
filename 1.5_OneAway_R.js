/* 
One Away: There are three types of edits that can be performed on strings: 
insert a character, 
remove a character, 
or replace a character.
Given two strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false


I: 2 strings
O: boolean (true or false)
C: optimize
E: empty string

time complexity: linear O(N)
space complexity: O(1) constant
*/

let oneAway = (s1,s2) => {
    let edits = 1;
    let maxLength = Math.max(s1.length, s2.length)
    let diff = Math.abs(s1.length - s2.length)

    if (diff > edits) {
        return false;
    }

    for(let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
        let c1 = s1[i];
        let c2 = s2[j];
        if (c1 !== c2) {
            edits--;
            if (edits < 0) {
                return false;
            }
            if (c1 === s2[j + 1])
        }
    }
}
