/*
    Right Rotate By K
*/
const rightRotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % n;

    let temp = arr.slice(n - k);

    for(let i = n - k - 1; i >= 0; i--){
        arr[i+k] = arr[i]
    }
    console.log(arr, 'arr')

    for(let j = 0; j < k; j++){
        arr[j] = temp[j]
    }
    console.log(arr, 'arr')
}

rightRotateArrayByK([1, 2, 3, 4, 5, 6], 2)