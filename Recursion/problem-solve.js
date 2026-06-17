/*
    Write a function called power which accepts a base and 
    exponent. The function should return the power of the base 
    to the exponent. This function should minic the functionality
    of Math.pow()- do not worry about negative base and exponents

*/
function power(base, exponent) {
    if (exponent === 0) return 1; // base case
    return base * power(base, exponent - 1); // recursive case
}
console.log(power(2, 4));

/*
    Write a function factorial which accepts a number and returns
    the factorial of the number. A factorial is the product of an
    integer and all the integers below; e.g factorial four(4!) is
    equal to 24, beacuse 4*3*4*1 equals 24. factorail zero (0!) is always 1.

*/
function factorial(num) {
    if (num < 0) return 0; // base case
    if (num <= 1) return 1; // base case
    return num * factorial(num - 1); // recursive case
}
console.log(factorial(5));

/*
    Write a function called productOfArray which takes in an array
    of numbers and returns the product of them all.
*/
function productOfArray(array) {
    if (array.length === 0) return 1; // base case
    return array[0] * productOfArray(array.slice(1));
}
console.log(productOfArray([1, 2, 3, 4, 8, 9]));

/*
    Write a function called recursiveRange which accepts a number
    and adds up all the numbers from 0 to the number passed to the 
    function.
*/
function recursiveRange(number) {
    if (number === 0) return 0; // base case
    return number + recursiveRange(number - 1); // recursive case
}
console.log(recursiveRange(6));

/*
    Write a recursive function called fib which accepts a number and 
    return nth number in the Fibonacci sequence. Recall that the Fibonacci
    sequence is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1 and where every number thereafter is equal 
    to the previous two numbers.
*/
function fib(number) {
    if (number <= 2) return 1; // base case
    return fib(number - 1) + fib(number - 2); // recursive case
}
console.log(recursiveRange(5));

/*
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
// without recursion
function reverse(string) {
    if (string.length === 0) return null;
    let str = string.split("");
    let revArray = [];

    for (let i = str.length - 1; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join("");
}
console.log(reverse("Cow"));

// using with recursion
function reverse1(string) {
    if (string.length <= 1) return string;
    return reverse1(string.slice(1)) + string[0];
}
console.log(reverse1("Cow"));

/*
    Write a recursive function called isPalindrome which reurns true
    if the string passed to it is a palindrome(reads the same forward and backward). Otherwise it returns false.
*/
function isPalindrome(string) {
    if (string.length === 0) return true;
    if (string.length === 2) return string[0] === string[1];
    if (string[0] === string.slice(-1))
        return isPalindrome(string.slice(1, -1));
    return false;
}
console.log(isPalindrome("tacocat"));

/*
    Write a recursive function called someRecursive which accepts an 
    array and a callback. The function returns true if a single value
    in the array returns true when passed to the callback. Otherwise 
    it returns false.
*/
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback([array[0]])) return true;
    return someRecursive(array.slice(1), callback);
}
console.log(someRecursive([1, 2, 3, 4, 5], (value) => value > 1));

/*
    Write a recursive function called flatten which accepts an array
    of arrays and returns a new array with all values flattened.
*/
function flatten(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            newArray = newArray.concat(flatten(array[i]));
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(flatten([1, 2, 3, [4, 5]]));

/*
    Write a recursive function called capitalizeFirst. Given an array
    of strings, capitalize the first letter of each string in the array.
*/
// without recursion
function capitalizeFirst(strArray) {
    let newArray = [];
    for (let i = 0; i < strArray.length; i++) {
        let firstLetter = strArray[i].slice(0, 1).toUpperCase();
        let capFirstLetterWord = firstLetter + strArray[i].slice(1);
        newArray.push(capFirstLetterWord);
    }
    return newArray;
}
console.log(capitalizeFirst(["abc", "bca"]));

// with recursion
function capitalizeFirst1(strArray) {
    let newArray = [];
    if (strArray.length === 0) return [];
    newArray.push(strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1));
    return [...newArray, ...capitalizeFirst(strArray.slice(1))];
}
console.log(capitalizeFirst1(["abc", "bca"]));

/*
    Write a recursive function called nestedEvenSum.Return the sum of 
    all even numbers in an object which may contain nested objects.
*/
function nestedEvenSum(nestedObject) {
    let evenSum = 0;
    for (let key in nestedObject) {
        if (typeof nestedObject[key] === "object") {
            evenSum = evenSum + nestedEvenSum(nestedObject[key]);
        } else {
            if (
                typeof nestedObject[key] === "number" &&
                nestedObject[key] % 2 === 0
            ) {
                evenSum = evenSum + nestedObject[key];
            }
        }
    }
    return evenSum;
}
let obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};
console.log(nestedEvenSum(obj2));

/*
    Write a recursive function called capitalizeWords.Given an array
    of words, return a new array containing each word capitalized
*/
function capitalizeWords(strArray) {
    let newArray = [];
    if (strArray.length === 0) return [];
    newArray.push(strArray[0].toUpperCase());
    newArray = [...newArray, ...capitalizeWords(strArray.slice(1))];
    return newArray;
}
console.log(capitalizeWords(["abc", "bus"]));

/*
    Write a recursive function called stringifyNumbers which takes in 
    an object and finds all of the values which are numbers and converts
    them to string.Recursive would be great way to solve this!
*/

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
let object = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};
console.log(stringifyNumbers(object));

/*
    Write a recursive function called collectStrings which accepts an object and returns an array of all the values in
    the object that have a typeof string.
*/
function collectStrings(nestedObject) {
    let objectValue = [];
    for (let key in nestedObject) {
        if (typeof nestedObject[key] === "object") {
            objectValue = objectValue.concat(collectStrings(nestedObject[key]));
        } else {
            if (typeof nestedObject[key] === "string") {
                objectValue.push(nestedObject[key]);
            }
        }
    }
    return objectValue;
}
let obj3 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};
console.log(collectStrings(obj3));

// ─────────────────────────────────────────
// Recursive function to print numbers 1 to n
// i = current number, n = last number
// ─────────────────────────────────────────
const printNumber = (i, n) => {

    // 🛑 Base case: if i crosses n, stop recursion
    if (i > n) {
        return;
    }

    // ✅ Print current number
    console.log(i);

    // 🔁 Recursive call: increment i and repeat
    printNumber(i + 1, n);
}

// 🚀 Entry point: print numbers from 1 to 4
printNumber(1, 4);


// ─────────────────────────────────────────
// Recursive function to print numbers n down to 1
// i = current number, n = last number (stop point)
// ─────────────────────────────────────────
const printNumber = (i, n) => {

    // 🛑 Base case: if i goes below 1, stop recursion
    if (i < 1) {
        return;
    }

    // ✅ Print current number
    console.log(i);

    // 🔁 Recursive call: decrement i and repeat
    printNumber(i - 1, n);
}

// 🚀 Entry point: start from 4, go down to 1
printNumber(4, 4);

// ─────────────────────────────────────────
// Recursive function to print numbers n down to 1
// using BACKTRACKING technique
// i = current number, n = last number
// ─────────────────────────────────────────
const printNumber = (i, n) => {

    // 🛑 Base case: if i crosses n, stop recursion
    if (i > n) {
        return;
    }

    // 🔁 Recursive call FIRST (go deep before printing)
    printNumber(i + 1, n);

    // ✅ Print AFTER recursion returns (backtracking)
    console.log(i);
}

// 🚀 Entry point: print numbers from 4 down to 1
printNumber(1, 4);

// ─────────────────────────────────────────
// Recursive function to reverse an array
// arr = array, left = start index, right = end index
// ─────────────────────────────────────────
const reverseArray = (arr, left, right) => {

    // 🛑 Base case: stop when left meets right
    if (left >= right) {
        return;
    }

    // ✅ Swap left and right elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // 🔁 Recursive call: move inward from both sides
    reverseArray(arr, left + 1, right - 1);
}

// 🚀 Entry point
let arr = [1, 2, 3, 4, 5];
reverseArray(arr, 0, arr.length - 1);

// ─────────────────────────────────────────
// Recursive function to check palindrome
// str = string, left = start, right = end
// ─────────────────────────────────────────
const isPalindrome = (str, left, right) => {

    // 🛑 Base case: if pointers meet, it's a palindrome
    if (left >= right) {
        return true;
    }

    // ❌ If characters don't match, NOT a palindrome
    if (str[left] !== str[right]) {
        return false;
    }

    // 🔁 Recursive call: move inward from both sides
    return isPalindrome(str, left + 1, right - 1);
}

// 🚀 Entry point
let str = "racecar";
console.log(isPalindrome(str, 0, str.length - 1));
