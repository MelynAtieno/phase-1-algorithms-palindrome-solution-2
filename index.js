function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
        const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
            return false;
}
}}

return true;


/*
  Add written explanation of your solution here

  The isPalindrome function returns either true of false. if the first letter of a word is the sa
  same as the last letter, then the function will return "true". If the two letters don't match, the
  function will return "false".
  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("tortoise"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hawk"));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
