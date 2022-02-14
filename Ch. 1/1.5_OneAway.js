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




//create a object to hold the values 
//create function for OneAway 
//loop through the characters in the array
//check whether they are one edit away or zero edits away

//if insert, s1's current char should match s2's next char
//if remove, then s1's next char should match s2's current char
//if replace, then s1's next char should match s2's next char

//max one edit
//if diff in length is greater than max edit, return false

//iterate through strings at the same time, checking for diff
//store max length for forloop condition
//if diff is found, dec edits, check if edits dropped below zero, if so return false
//when forloop is done, return true



let oneAway = (s1, s2) => {
   let edits = 1;     // edits is one because thats all we are allowed
   let maxLen = Math.max(s1.length, s2.length);
   let diff = Math.abs(s1.length - s2.length);  // look up syntax for abs

   if (diff > edits) {        //if the string is more than one character different in length false it is not one edit away
       return false;
   }

    for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
        let c1 = s1[i] //character string 1 at index i
        let c2 = s2[j] //character string 2 at index j 
        if (c1 !== c2) {
            edits--;
            if (edits < 0) {
                return false;
            }
            if (c1 === s2[j + 1]) {  //in this case s2 has one more
                j++;
            } else if (s1[i + 1] === c2) {   //in this case s1 has one more 
              i++;
            }
        }
    }
    return true;
};


//test cases
console.log(
    oneAway('pale' , 'ple') === true, //removed
    oneAway('pales', 'pale') === true, //inserted
    oneAway('pale', 'bale') === true, //replaced
    oneAway('cak', 'cake') === true //inserted
)