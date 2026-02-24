/*
    *** Big_O_Notation ***
        => Big O Notation is a way to formalize fuzzy counting.

        => It's allows us to talk formally about how the runtime of an algorithm grows as the input grow.

    *** Big_O Definition ***
        => We say that an algorithm is O(f(n)) if number of simple operations the computer has to do is eventually less than constant  times f(n), as n increases.

        * f(n) could be linear (f(n) = n)
        * f(n) could be quadratic (f(n) = n*n)
        *  f(n) could be constant (f(n) = 1)
        * f(n) could be something entirely different.
            Note: f(n) === input; n ==== runtime

*/

/*
    ==> To analyze the performance of an algorithm, we use Big O Notation
    ==> Big O Notation can gives us a high level understanding of the time or space complexity of an algorithm.
    ==> Big O Notation does not care about precision, only about general trends(linear? quadratic? constant?)
    ==> The time or speac complexity ( as measuerd by Big O) depends only on the algotithm, not the hardware used to run the algorithm
    ==> Big O Notation is everywhere.
*/

/*
    n * (n+1) / 2
        * => is one operation
         + => aritmatic operation 
         / => arithmatic operation
        total always 3 operations, that is why it's 0(3) === 0(1)
*/
function addUpTo(n) {
    return (n * (n + 1)) / 2;
    //total always 3 operations, 0(3) === 0(1)
}

console.log(addUpTo(10));
/*
    Number of operations is eventually bounded by a multiple of n.
    In this time it's a O(n) === O(n)
*/
function addUpTo(n) {
    let total = 0;

    for (let i = 0; i <= n; i++) { // O(n)
        total += i;
    }
    return total;
    // total (On) === O(n)
}
console.log(addUpTo(10));
/*
    Number of operations is eventually bounded by a multiple of n.
    In this time it's a O(2n) === O(n)

*/
function countUpAndDown(n) {
    console.log("Going Up");
    for (let i = 0; i <= n; i++) { // O(n)
        console.log(i);
    }
    console.log("At the top !\n Going Down");

    for (let j = n; j >= 0; j--) { // O(n)
        console.log(j);
    }
    console.log("Back Down, Bye!");
    // total O(n + n) === O(2n) === O(n)
}
countUpAndDown(10);

/*
    O(n) operation inside of an O(n) operation
    In this time it's a O(n*n) === O(n*n)

*/
function printAllPairs(n){
    for(let i = 0; i <= n; i++){ // O(n)
        for(let j = 0; j <= n; j++){ // O(n) inside O(n)
            console.log(i, j)
        }
    }
     // total O(n * n) === O(n*n)
}
printAllPairs(2);

/*
    O(1) -> logN -> O(n) -> nlogN -> O(n2)
*/

/*

***** Stack Learner******

1. A variable is not a data [structure.](https://structure.Data) A data structure stores a lot of data.

2. Data structure works only store data.

3. An algorithm is an instruction.

4. Arrays and linked lists are used in every data structure somewhere.

5. Select the DSA that best suits this problem.

6. Operation- transform: fully change data, map - apply every data or element.

7. Search gives me a single piece of data, but a filter gives me a collection(array, linked list) of data.

8. 48.15 - important

9. 57.25 -

10. Time and space complexity analysis is important --- the growth analysis technique is asymptotic analysis.

11. If you want to reduce operation, you need use space or if you want to reduce space you need to use operation.


*/


