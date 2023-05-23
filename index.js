var findMin = function(nums) {
  let curDif = nums[1] - nums[0];
  
  
  if(curDif < 0){
      return nums[1] > nums[0] ? nums[0] : nums[1];
  };
  
  let prevDif = 0;
  for(let i = 1; i < nums.length; i++){
      

      
      prevDif = curDif;
      
      curDif = nums[i] - nums[i - 1];
      
      if (curDif < 0){
          return nums[i];
      }
  }
  
  return nums[0];
};