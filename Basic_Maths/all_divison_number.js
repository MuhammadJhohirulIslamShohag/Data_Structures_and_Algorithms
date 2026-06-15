/*
  All Division Number 
*/

const allDivisonNumber = (n) => {
    for(let i = 1; i <= n; i++){
        if(n%i==0){
            console.log(i)
        }
    }
}
allDivisonNumber(36);
