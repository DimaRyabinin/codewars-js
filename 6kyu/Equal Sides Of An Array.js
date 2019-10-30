// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum of the integers to the
// left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    let arr_before = null;
    let arr_after = null;

    for (let x = 0; x < arr.length; x ++) {
        arr_before = 0;
        arr_after = 0;
        for (let i = 0; i < x; i ++) {
            arr_before += arr[i];
        }
        for (let i = x + 1; i < arr.length; i ++) {
            arr_after += arr[i];
        }
        if (arr_before == arr_after) {
            return x;
        }
    }
    return -1;
}