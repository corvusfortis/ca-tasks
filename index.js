function search(nums, target){
  let mid = findMin(nums);
  return binary(nums, target, mid);
}

function findMin(nums) {
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

function binary(nums, target, mid) {
let start = 0;
let end = nums.length - 1;
let center = mid;

while(start <= end){
     
     
     if(nums[center] === target){
         return center;
     }
     
     if(nums[center] < target){
         start = center + 1;
     }else{
         end = center - 1;
     }
     
     center = Math.floor((start + end) / 2);
}

return -1;
};