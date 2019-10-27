function wordsToMarks(string) {
    let map = new Map();

    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    map.set('d', 4);
    map.set('e', 5);
    map.set('f', 6);
    map.set('g', 7);
    map.set('h', 8);
    map.set('i', 9);
    map.set('j', 10);
    map.set('k', 11);
    map.set('l', 12);
    map.set('m', 13);
    map.set('n', 14);
    map.set('o', 15);
    map.set('p', 16);
    map.set('q', 17);
    map.set('r', 18);
    map.set('s', 19);
    map.set('t', 20);
    map.set('u', 21);
    map.set('v', 22);
    map.set('w', 23);
    map.set('x', 24);
    map.set('y', 25);
    map.set('z', 26);

    let arr = string.split('');
    let result = 0;
    for (let x = 0; x < arr.length; x ++) {
        result += map.get(arr[x]);
    }
    return result;
}