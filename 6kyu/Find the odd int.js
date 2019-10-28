// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    let number = 1;
    for (let i = 0; i < A.length; i ++) {
        number = 1;
        for (let x = 0; x < A.length; x ++) {
            if (A[i] == A[x]) {
                number += 1;
            }
        }
        if (number % 2 == 0) {
            return A[i];
        }
    }    
}