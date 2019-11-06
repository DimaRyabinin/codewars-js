// Move the first letter of each word to the end of it, then add "ay" to the end of the
// word. Leave punctuation marks untouched.

function pigIt(str) {
    let arr = str.split(' ');
    let array = [];
    
    arr.forEach(function(elem) {
        let arr_str = elem.split('');
        if (elem != '!' && elem != '?') {
        arr_str.push(arr_str[0]);
        arr_str.push('ay');
        arr_str.shift('');
        str_result = arr_str.join('');
        array.push(str_result);
        } else array.push(elem);
    })
    let result = array.join(' ');
    return result;
}