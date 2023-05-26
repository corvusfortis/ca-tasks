var characterReplacement = function(s, k) {
  let start = 0;
  let end = s.length;
  let counter;
  let max = 0;
  let temp;
  
  
   while(start < end){
       temp = k;
       counter = 0;
       
       
       while(temp > -1 && counter < end){
           counter++;
           if(s[counter] !== s[start]){
               temp--;
           }
       }
       
       max = max > counter ? max : counter;
       
       start++; 
         
   }
   return max;
};