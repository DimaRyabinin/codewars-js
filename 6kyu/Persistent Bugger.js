// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let str = String(num);
    let arr = str.split('');

    if (arr.length == 1) {
        return 0;
    }

    let total = 1;
    let result = 0;
    for (let x = 0; arr.length > 1; x ++) {
        for (let i = 0; i < arr.length; i ++) {
            total = total * Number(arr[i]);
        }
        let str_loop = String(total);
        arr.length = 0;
        arr = str_loop.split('')
        total = 1;
        result += 1;
    }
    return result;
 }