var eraseOverlapIntervals = function(intervals) {
  let temp = intervals.sort((a, b) => a[0] - b[0]);
  let counter = 0;
  let stop = true; 
  
  
  while(stop){
      stop = false;
      for(let i = 1; i < temp.length; i++){
          if(temp[i-1][1] > temp[i][0] || temp[i-1][1] > temp[i][1]){
              counter++;
              temp.splice(i, 1);
              stop = true;
              break;
          }
        }
  }

  
  return counter;
};
