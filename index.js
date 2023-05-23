var lengthOfLongestSubstring = function(s) {
  let subs = '';
      let arr = [];
      let j = 0;
      
      for(let i = 0; i < s.length; i++){
          if(!subs.includes(s[i])){
              subs += s[i];
          }else{
              arr.push(subs);
              // s[i-1] === s[i] ? subs = s[i] : subs = s[i-1] + s[i];
              subs = '';
              j = i;
              
              while(!subs.includes(s[j]) && s[j - 1] !== s[j] && j >= 0){
                  subs += s[j];
                  j--;
              }
              
              subs.split('').reverse().join('');
          }
      }
      
      
      console.log(arr);
      return Math.max.apply(null, arr.map(e => e.length));
  };