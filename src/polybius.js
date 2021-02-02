// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55"
  };

  function polybius(input, encode = true) {
    //if the input length excluding spaces is an odd number, return false
    if (!encode && input.split(" ").join("").length % 2 !== 0) return false;
    
    if (encode) {
      return input.split("").map(element => {
        let result = '';
          //if the element is a space, leave it as is and add it to the result
          if (element === " ") {
            element = element;
            result += element;
          }else {
            //otherwise reassign the element to its corresponding value in the alphabet object and add it to the result
            element = alphabet[element.toLowerCase()];
            result += element;
          }  
        
        return result;  
      }).join("");
    }
    else if (!encode) {
      if (input.includes(" ")) {
        return input.split(" ").map(element => {
          let word = '';
          for (let i = 0; i < element.length; i+=2) {
            if (`${element[i]}${element[i+1]}` == "42") {
              word += '(i/j)';
            }else {
              for (let key in alphabet) {
                if (alphabet[key] === `${element[i]}${element[i+1]}`) {
                  word += key;
                }
              }
            }
          }
          return word;
        }).join(" ");
      }else {
        return input.match(/.{2}/g).map(element => {
          let result = '';
          if (element === " ") {
            element = element;
            result += element;
          }
          else if (element == "42") {
            element = '(i/j)';
            result += element;
          }else {
            for (let key in alphabet) {
              if (alphabet[key] === element) {
                element = key;
                result += element;
              }
            }
          }
          return result;
        }).join("");
      }
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
