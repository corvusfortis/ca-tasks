var climbStairs = function(n) {
   
  let curr = 0;
  let prev = 1;
  let prevPrev = 0;
  
  for(let i = 0; i < n; i++){
          
          curr = prev + prevPrev;
          prevPrev = prev;
          prev = curr;
  }
  
  return curr;
};