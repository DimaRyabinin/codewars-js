// Write a function called that takes a string of parentheses, and determines if the
// order of the parentheses is valid. The function should return true if the string is
// valid, and false if it's invalid

function validParentheses(parens){
    let map = new Map();
    map.set(')', '(');

    let str = parens.split('');
    let number = parens.length;
    
    for (var y = 0; y < str.length; y ++) {
        for (var x = 0; x < str.length; x ++) {
            if (map.get(str[x + 1]) == str[x]) {
                str.splice(x, 2);
                x = x - 1;
            }
        }
        for (var x = 0; x < str.length; x ++) {
            if (map.get(str[x + 1]) == str[x]) {
                str.splice(x, 2);
                x = x - 1;
            }
        }
    }
    if (str.length == 0) {
        return true;
    } else return false;
  }

console.log(validParentheses('()(())'));