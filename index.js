var lengthOfLongestSubstring = function(s) {
    
  let subs = '';
  let arr = [];
  
  for(let i = 0; i < s.length; i++){
      if(!subs.includes(s[i])){
          subs += s[i];
      }else{
          arr.push(subs);
          subs = s[i];
      }
  }
  
  arr.push(subs);
  return Math.max.apply(null, arr.map(e => e.length));
};