// Write a function dirReduc which will take an array of strings
// and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).


function dirReduc(arr) {
    for (let i = 0; i < arr.length; i ++) {
        for (let x = 0; x < arr.length; x ++) {
            if ((arr[x] == 'NORTH' && arr[x + 1] == 'SOUTH') || (arr[x] == 'SOUTH' && arr[x + 1] == 'NORTH')) {
                arr.splice(x, 2);
            }
        }
        for (let x = 0; x < arr.length; x ++) {
            if ((arr[x] == 'EAST' && arr[x + 1] == 'WEST') || (arr[x] == 'WEST' && arr[x + 1] == 'EAST')) {
                arr.splice(x, 2);
            }
        }
    }
    return arr;
}