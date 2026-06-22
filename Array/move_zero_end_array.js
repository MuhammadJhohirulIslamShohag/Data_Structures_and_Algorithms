/*
  Move All Zeros to The End of the Array
*/


// Brute Force 
const moveZeroEnd_Brute = (arr) => {
    let tempArr = [];      
    let tempArrZero = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            tempArr.push(arr[i]);
        } else {
            tempArrZero.push(arr[i]);
        }
    }

    for (let z = 0; z < tempArrZero.length; z++) {
        tempArr.push(tempArrZero[z]);
    }

    console.log(tempArr); // [1, 2, 1, 4, 0, 0, 0]
};

moveZeroEnd_Brute([1, 2, 0, 1, 0, 4, 0]);

// Better 

const moveZeroEnd_Better = (arr) => {
    let nonZeros = arr.filter(x => x !== 0);


    let zeroCount = arr.length - nonZeros.length;

    
    let zeros = new Array(zeroCount).fill(0);


    let result = [...nonZeros, ...zeros];
    console.log(result); 
};

moveZeroEnd_Better([1, 2, 0, 1, 0, 4, 0]);

// Optimal 
const moveZeroEnd_Optimal = (arr) => {
    let n = arr.length;
    let j = -1;

    // 
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            j = i;
            break;
        }
    }

    // 
    if (j == -1) {
        console.log(arr);
        return;
    }

    // 
    for (let p = j + 1; p < n; p++) {
        if (arr[p] != 0) {
            [arr[p], arr[j]] = [arr[j], arr[p]]; // swap
            j++;
        }
    }

    console.log(arr); // [1, 2, 1, 4, 0, 0, 0]
};

moveZeroEnd_Optimal([1, 2, 0, 1, 0, 4, 0]);