/*
    Rotate Array By K Elements
*/
const leftRotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % n;

    const temp = arr.slice(0, k);

    for(let i = k; i < n; i++){
        arr[i-k] = arr[i]
    }

    for(let i = 0; i < k; i++){
        arr[n-k+i] = temp[i]
    }
}

leftRotateArrayByK([1, 2, 3, 4, 5, 6], 2)
