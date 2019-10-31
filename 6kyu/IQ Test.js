// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.
// Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers,
// he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.


function iqTest(numbers) {
    let arr = numbers.split(' ');
    let result_first = [];
    let result_second = [];
    for (let i = 0; i < arr.length; i ++) {
        for (let x = 0; x < arr.length; x ++) {
            if ((arr[i] % 2 == 0 && arr[x] % 2 != 0) && i != x) {
                result_first.push(i + 1);
            }
            if ((arr[i] % 2 != 0 && arr[x] % 2 == 0) && i != x) {
                result_second.push(i + 1);
            }
        }    
    }
    if (result_first[0] == result_first[1]) {
        return result_first[0];
    } else if (result_second[0] == result_second[1]) {
        return result_second[0];
    }
}