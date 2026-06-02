/*
 Pattern Seven 
*/

const patternSeven = (n) => {
  for(let i = 0; i <= n; i++){
    let line = '';
    for(let j = 1; j < n-i+1; j++){
      line += j + ' '
    }
    console.log(line);
  }

}
patternSeven(5)
