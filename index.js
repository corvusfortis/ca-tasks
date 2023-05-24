var maxProduct = function(nums) {

  if(nums.length < 3){
       return Math.max.apply(null, nums);
  }

  let startIndex
  let prodArr = [];
  let curLength = nums.length;
  
  while(curLength > 0){
      startIndex = 0;
      while(startIndex <= curLength){
          
      curArr = [];
          for(let i = startIndex; i < curLength; i++){
              curArr.push(nums[i]);
              prodArr.push(curArr.reduce((a, b) => a * b));
          }
          
          startIndex += curLength;
      }

      curLength--;
  }
  
  return Math.max.apply(null, prodArr);
};