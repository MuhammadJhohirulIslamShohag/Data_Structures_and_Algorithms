/*
    Palindrome Number
*/
const palindromeNumber = (n) => {
    let dup = n;
    let reverse = 0;

    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        let reverse = ( reverse * 10 ) + lastDigit;
        n = Math.floor( n / 10  );
    }
    if( dup === reverse){
        console.log(true);
    }else{
        console.log(false)
    }
}

palindromeNumber(121)

