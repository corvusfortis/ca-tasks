var twoSum = function(nums, target) {
  let result = [];
  
  for(let i = 0; i < nums.length; i++){
      nums.forEach((item, index) => {
          if (nums[i] + item === target && i !== index){
              console.log(nums[i] + item);
              result.push(i);
              result.push(index);
          }
          
         
      })
      
       if(result.length > 0){
              return result;
          }
        }
          
   return result;
};