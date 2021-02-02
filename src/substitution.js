
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const regularAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    //return false if all the characters in the substitution alphabet are not unique
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) return false;
    }

     //loop through the split input
     return input.split("").map(element => {
      let result = '';
      //if encode is true
      if (encode) {
        //if the character at that index is a space, leave as is and add to the result
        if (element === ' ') {
          element = element;
          result += element;
        }else {
          //otherwise find the index of that character in the original alphabet, and reassign 
        //the character of the input to its corresponding index of the substitution alphabet and add it to the result
          element = alphabet[regularAlphabet.indexOf(element.toLowerCase())];
          result += element;
        }
      }
      //if encode is false
      else if (!encode) {
        //if the character at that index is a space, leave as is and add to the result
        if (element === ' ') {
          element = element;
          result += element;
        }else {
          //otherwise find the index of that character in the substitution alphabet, and reassign 
        //the character of the input to its corresponding index of the regular alphabet and add it to the result
          element = regularAlphabet[alphabet.indexOf(element.toLowerCase())];
          result += element;
        } 
      }  
     return result;
     }).join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
