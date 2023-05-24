var groupAnagrams = function(strs) {

  if(strs.every(e => e === strs[0])){
      return [strs];
  }

  let arr = [];
  let result = [];
  
  strs.forEach((e, ind) => {
      arr = [];
      arr.push(e);
      strs.forEach((i, index) => {
          if(ind !== index && isAnagram(e, i)){
              arr.push(i);
          }
      })
      result.push(arr);
  })
  
  result = result.map(e => e.sort().join('|'));
  
  let set = new Set(result);
  
  result = Array.from(set);
  
  return result.map(e => e.split('|')).sort();
};


function isAnagram(s, t) {
  
  return s.split('').sort().join('') === t.split('').sort().join('');
}