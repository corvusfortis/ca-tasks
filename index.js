var countSubstrings = function(s) {
  let startIndex;
  let curLength = s.length;
  let curStr;
  let result = [];
  
   while(curLength > 0){
    startIndex = 0;
    while(startIndex <= curLength){
        
    curStr = '';
        for(let i = startIndex; i < curLength; i++){
            curStr += s[i];
        }

        result.push(curStr);
        
        startIndex++;
    }
  
    curLength--;
}

return result.filter(e => isPalindrome(e) && e.length > 0).length;
};

function isPalindrome(s) {
let result = s.toLowerCase().split('').filter(e => /[a-z0-9]/.test(e));

let firstHalf = result.slice(0, Math.floor(result.length / 2)).join('');

let secondHalf = result.slice(Math.ceil(result.length / 2) ).reverse().join('');


return firstHalf === secondHalf;
};