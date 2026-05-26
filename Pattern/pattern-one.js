/*

Pattern - > nested loops ( outer and inner )

1. for outer loop, count the number of lines/rows, that will determine what ourouter loop is going to be 

2. for the inner loop we have to focus on the columns, and connect them somehow to the rows 

3. whatever you are printing just '*' / '1', inner for loop.

4. observe symmetry - optional 


*/

const patternOne = (n) => {
  for(let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j < n; j++){
      line += '*' + ' '
    }
    console.log(line);
  }
  
}
patternOne(5)