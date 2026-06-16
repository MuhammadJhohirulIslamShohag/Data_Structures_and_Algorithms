/*
    *** What is Recursion? ***
        => A process (a function in our case ) that calls itself

    *** How Recursion Function Work? ***
        => Invoke the same function over and over again with a different input until you reach your base case
            *** Base Case ***
                => Base case where the recursion is to be stop.
                => The condition when the recursion ends.

        Note That: Base case(where the recursion stop) and different input(recursion function call over and over again but each time you want to call it with different piece of data)

    *** Why do i need to know this? ***
        => It's everywhere, it's depends use it.
        => JSON.parse(); JSON.strigify()
        => document.getElementById and DOM traversal algorithms
        => Object traversal.
        => We will see it with more complex data structures.
        => It's sometimes a cleaner alternative to iteration.
*/
/*
        *** The Call Stack ***
            => In almost all program languages, there is a built in data structure that manages what happens when functions are invoked, it's named the call stack.
            => It's a stack data structure.
            => Any time a function is invoked it is placed (pushed) on the top of the call stack.
            => When JavaScript sees the return keyword or when the function ends, the compiler will remove.
*/
// understanding call stack with debuging

// function takeShawer(){
//     return "Finished Showering!"
// }
// function cookFood() {
//     const items = ["Olive", "figs", "Eggs"]
//     return items[Math.floor(Math.random() * items.length)]
// }
// function takeBreakFast() {
//     let meal = cookFood();
//     return `Eating ${meal}`
// }
// function wakeUp(){
//     takeShawer();
//     takeBreakFast();
//     console.log("Ok ready to go to work!")
// }
// wakeUp()

/*
 *** Recurstion First Example ***
 */
// with recursion
function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return;
    } // base case
    console.log(num);
    num--;
    countDown(num); //recursive case:function call over and over again but each time you want to call it with different piece of data
}
countDown(4);

// without recursion
function countDownWithoutRecursion(num) {
    for (let i = 1; i < num; i++) {
        console.log(i);
    }
    console.log("Done!");
}

/*
 *** Recurstion Second Example ***
 */
function sumFunction(num) {
    if (num <= 0) return 1; // base case
    return num + sumFunction(num - 1); // recursive case
}
sumFunction(3)
    //  return 3 + sumFunction(2)
                    // return 2 + sumFunction(1)
                                    // return 1 + sumFunction(0)
                                                    // return 1
    // after call stack poping
        //return 3 + 4
                    // return 2 + 2
                                    // return 1 + 1
                                                    // return 1

/*
    *** Classic Recursion Example like Factorial ***
*/
function factorial(num){
    if(num === 1) return 1
    return num * factorial(3)
}
factorial(3)

// without recursion
function factorial(num){
    let factorialResult=1
   for(let i = 1; i <= num; i++){
        factorialResult *=  i
   }
    return factorialResult
}
factorial(3)

// without recursion
function factorial1(num){
    let factorialResult=1
   for(let i = num; i > 1; i--){
        factorialResult *=  i
   }
    return factorialResult // 1 * 3 * 2
}
factorial1(3)

/*
    *** Common mistake when we write recursive programme ***
        => no base case (it's going ifinitive time, it's crash the runing execution)(no end in sight)
                function factorial(num){
                    return num * factorial(3) // 3* 2* 1* 0* -1 * -2 ........
                }
                factorial(3)

        => Forgatting to return or returning the  wrong  things!
                 function factorial(num){
                    if(num === 1) console.log(1)
                    return num * factorial(3) // 3* 2* 1* 0* -1 * -2 ........
                }
                factorial(3)

        => Stack Overflow(Too many function is called, infinity function is called)
*/

// Recursive function to print 'Shohag' n times
// i = current count, n = total times to print

const printNames = (i, n) => {
    // Base case: stop when i exceeds n
    if (i > n) {
        return;
    }

    // Print the name
    console.log('Shohag');

    // Recursive call: move to next count
    printNames(i + 1, n);
}

// Start from 1, print 5 times
printNames(1, 5);
