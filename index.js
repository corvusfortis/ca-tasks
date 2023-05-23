var threeSum = function(nums) {
  let result = [];
  let temp = [];
  let triplet;
  
  for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
          if(i === j){
              continue;
          }
          for(let k = 0; k < nums.length; k++){
              if(i === k || j === k){
                  continue;
              }
             triplet = [];
             triplet.push(nums[i]);
             triplet.push(nums[j]);
             triplet.push(nums[k]);
             temp.push(triplet);
          }
      }
  }
  
  temp = temp.map(e => e.sort((a, b) => a - b).join('|'));
  
  temp.forEach(e => {
      if(!result.some(i => i === e)){
          result.push(e);
      }
  })
  
  return result.map(e => e.split('|').map(i => Number(i))).filter(e => e.reduce((a, b) => a + b) === 0);
};