// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    return input.split("").map(element => {
      let result = '';
      if (encode) {
        //if the alphabet doesn't include the element(space or special character), leave it as is and add to result
        if (!alphabet.includes(element.toLowerCase())) {
          element = element;
          result += element;
        }
        //else if the shift has gonne 'off' the alphabet and the index is undefined
        else if (!alphabet[alphabet.indexOf(element.toLowerCase()) + shift]) {
          if (shift > 0) {
              element = alphabet[(alphabet.indexOf(element.toLowerCase()) - alphabet.length) + shift];
              result += element;
          }else {
              element = alphabet[(alphabet.indexOf(element.toLowerCase()) + alphabet.length) + shift];
              result += element;
                  }  
        }else {
          //reassign the element to the character of the alphabet at index of element + shift
          element = alphabet[alphabet.indexOf(element.toLowerCase()) + shift];
          result += element;
            } 
      }
      else if (!encode) {
        if (!alphabet.includes(element.toLowerCase())) {
          element = element;
          result += element;
        }
        //else if the shift has gonne 'off' the alphabet and the index is undefined
        else if (!alphabet[alphabet.indexOf(element.toLowerCase()) - shift]) {
          if (shift > 0) {
            element = alphabet[(alphabet.indexOf(element.toLowerCase()) + alphabet.length) - shift];
            result += element;
          }else {
            element = alphabet[(alphabet.indexOf(element.toLowerCase()) - alphabet.length) - shift];
            result += element;
                  }  
        }else {
          //reassign the element to the character of the alphabet at index of element - shift
          element = alphabet[alphabet.indexOf(element.toLowerCase()) - shift];
          result += element;
            } 
      }
      return result;
      }).join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
