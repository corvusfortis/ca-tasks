var productExceptSelf = function(nums) {
  let result = [];
  let temp;
  
  for (let i = 0; i < nums.length; i++){
      temp = [...nums];
      
      temp.splice(i, 1);
      
      result.push(temp.reduce((a, b) => a * b));
      
  }
  
  return result;
};