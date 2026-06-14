/*
    Reverse Number 
*/

const reverseNumber= (n) => {
  let reverse = 0;
  while (n > 0) {
    let lastDigit = n % 10
    n = Math.floor(n / 10);
    reverse = (reverse* 10)+ lastDigit
  }
  console.log(reverse);
}

reverseNumber(7789)

