/*
 Pattern Eighteen 
*/

const patternEighteen = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(65+(n-1-i+j))
    }
    console.log(line);
  }
};

patternEighteen(5);