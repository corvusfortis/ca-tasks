var containsDuplicate = function(nums) {
    
    let copyArr = [];
    
    for(let i = 0; i < nums.length; i++){
        copyArr = [...nums];
        copyArr.splice(i, 1);
        
        if(copyArr.some(e => e === nums[i])){
            return true;
        }
    }
    
    return false;
};