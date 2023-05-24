var isPalindrome = function(s) {
  let result = s.toLowerCase().split('').filter(e => /[a-z0-9]/.test(e));
  
  let firstHalf = result.slice(0, Math.floor(result.length / 2)).join('');
  
  let secondHalf = result.slice(Math.ceil(result.length / 2) ).reverse().join('');
  
  
  return firstHalf === secondHalf;
};