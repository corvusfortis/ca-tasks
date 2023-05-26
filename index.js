var rotate = function(m) {
  m = transpose(m);
  m = reverse(m);
};

function transpose(m){
  let temp = [];
  
  m.forEach(e => {
      temp.push(Array(3).fill(0));
  })
  
  for(let i = 0; i < m.length; i++){
      for(let j = 0; j < m[0].length; j++){
          temp[i][j] = m[j][i];
      }
  }
  
  m = temp;
  return m;
}

function reverse(m){
  m.forEach(e => e.reverse());
  return m;
}