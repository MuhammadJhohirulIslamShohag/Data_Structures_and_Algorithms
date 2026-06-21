/*
    Left Rotate Array  by One
*/

// brute force --- o(n)
const leftRotateArrayByOneBrute = (arr) => {
    let n = arr.length;
    let temp = new Array(n);

    for(let i = 1; i < n; i++){
        temp[i - 1] = arr[i];
    }

    temp[n - 1] = arr[0];

    return temp
}

leftRotateArrayByOneBrute([1, 2, 3, 4, 5])

// better 
const leftRotateArrayByOneBetter = (arr) => {
    let first = arr[0];
    let rest = arr.slice(0);
    rest.push(first)

    return rest
}

leftRotateArrayByOneBetter([1, 2, 3, 4, 5])

// optimal 
const leftRotateArrayByOneOptimal = (arr) => {
    let n = arr.length;
    let first = arr[0];

    for(let i = 1; i < n; i++){
        arr[i - 1] = arr[i]
    }

    arr[n-1] = first
    return arr
}

leftRotateArrayByOneOptimal([1, 2, 3, 4, 5])