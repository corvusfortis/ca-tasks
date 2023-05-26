var insert = function(intervals, newInterval) {
    
  let temp = [...intervals];
  
  temp.push(newInterval);
  
  return merge(temp);

};



function merge(intervals) {
let mergeCounter;
let temp = [...intervals];
temp.sort((a, b) => a[0] - b[0]);

while(mergeCounter !== 0){
    mergeCounter = 0;
    for(let i = 1; i < temp.length; i++){
        if(temp[i - 1][1] >= temp[i][0] || temp[i-1][1] >= temp[i][1]){
            mergeCounter++;
            temp[i - 1][1] = Math.max(temp[i][1], temp[i-1][1]);
            temp.splice(i, 1);
            break;
        }
    }
}
return temp;
};