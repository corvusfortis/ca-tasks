var setZeroes = function(matrix) {
    
  let zeroesI = [];
  let zeroesJ = [];
  
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          if(matrix[i][j] === 0){
              zeroesI.push(i);
              zeroesJ.push(j);
          }
      }
  }
  
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          if(zeroesI.some(e => e === i) || zeroesJ.some(e => e === j)){
              matrix[i][j] = 0;
          }
      }
  }
  
  return matrix;
};