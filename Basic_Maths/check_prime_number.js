/*
  Check Prime Number 
*/

// Brute Force 
const checkPrimeNumber = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n%i==0){
            count += 1;
        }
    }
    if (count < 3 ) {
        return true; 
    }else{
        return false;
    }
}

console.log(checkPrimeNumber(17));
