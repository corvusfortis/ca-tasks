var maxArea = function(height) {
  let result = [];
  let lower;
  
  height.forEach((e, ind) => {
      height.forEach((i, inx) => {
          lower = e > i ? i : e;
          result.push(lower * (Math.abs(ind - inx)));
      })
  })
  
  return Math.max.apply(null, result);
};