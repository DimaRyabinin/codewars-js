// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers) {
    let map = new Map();
    for (let i = 0; i < integers.length; i ++) {
        if (integers[i] % 2 == 0) {
            map.set(integers[i], true);
        } else map.set(integers[i], false);
    }

    let counter = 0;
    let result = null;
    for (let x = 0; x < integers.length; x ++) {
        counter = 0;
        for (let y = 0; y < integers.length; y ++) {
            if (map.get(integers[x]) == map.get(integers[y])) {
                counter += 1;
            }
            if (counter > 1) {
                break;
            }
        }
        if (counter < 2) {
            result = integers[x];
        }
    }
    return result;
}