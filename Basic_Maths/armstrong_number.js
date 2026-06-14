/*
    Armstrong Number
*/
const armstrongNumber = (n) => {
    let dup = n;
    let sum = 0;

    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        sum += ( lastDigit * lastDigit * lastDigit );
        n = Math.floor(n / 10);
    }
    if( dup == sum){
        console.log(true, sum);
    }else{
        console.log(false, sum)
    }
}

armstrongNumber(143)