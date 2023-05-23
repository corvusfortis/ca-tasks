var spiralOrder = function(matrix) {
    
    
  let height;
  let width;
  let result = [];
  
  while(matrix.length > 1 && matrix[0].length > 1){
      
      height = matrix.length;
      width = matrix[0].length;
      
      for(let i = 0; i < width; i++){
          result.push(matrix[0][i]);
      }
  
  
      for(let i = 1; i < height; i++){
          result.push(matrix[i][width - 1]);
      }
      
      for(let i = width - 2; i >= 0; i--){
          result.push(matrix[height - 1][i]);
      }
      
      
      for(let i = height - 2; i > 0; i--){
          result.push(matrix[i][0])
      }
      
      matrix = trimMatrix(matrix);
      
  }
  
  result.push(matrix);
  
  

  return result.flat(2);
};
                      
                      
                      
function trimMatrix(m){
  
  m.shift();
  m.pop();
  m.forEach(e => {
      e.shift();
      e.pop();
  })
  
  return m;
}