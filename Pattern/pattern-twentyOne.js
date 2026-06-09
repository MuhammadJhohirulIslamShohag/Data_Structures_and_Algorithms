/*
   Pattern Twenty One
*/

const patternTwentyOne = (n) => {
  for (let i = 0; i < n; i++) {
    let line = ' ';
    for (let j = 0; j < n; j++) {
        if(i == 0 || j == 0 || i == n-1|| j == n-1){
            line += '*';
        }else{
            line += ' ';
        }
    }
    console.log(line);
  }
};
patternTwentyOne(5);