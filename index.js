var maxSubArray = function(nums) {
    
  if(nums.length === 1){
      return nums[0];
  }
  
  let temp = nums.sort((a, b) => b - a);
  let currArr = [nums[0], nums[1]];
  let currArrSum = nums[0] + nums[1];
  let prevArrSum = 0;
  
  while(currArrSum > prevArrSum){
      prevArrSum = currArrSum;
      currArr.push(temp[currArr.length]);
      
      
      currArrSum = currArr.reduce((a, b) => a + b);
  }
  
  return currArr;
};