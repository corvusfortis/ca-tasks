var merge = function(intervals) {
  let mergeCounter;
  let temp = [...intervals];
  
  while(mergeCounter !== 0){
      mergeCounter = 0;
      for(let i = 1; i < temp.length; i++){
          if(temp[i - 1][1] >= temp[i][0]){
              mergeCounter++;
              temp[i - 1][1] = temp[i][1];
              temp.splice(i, 1);
              break;
          }
      }
  }
  return temp;
};