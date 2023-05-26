var exist = function(board, word) {
  let firstLetterIJ = findFirstLetter(board, word[0]);
  
  if(firstLetterIJ === null){
      return false;
  }
  
  let currLetterIJ = firstLetterIJ;
  
  for(let i = 1; i < word.length; i++){
      console.log(currLetterIJ);
      currLetterIJ = checkNextLetter(board, currLetterIJ, word[i]);
      
      if(currLetterIJ === null){
          return false;
      }
  }
  
  return true;
};

function findFirstLetter(board, letter){
  let j;
  for(let i = 0; i < board.length; i++){
      j = board[i].indexOf(letter);
      if(j !== -1){
          return [i, j];
      }
  }
  return null;
}

function checkNextLetter(board, prevIJ, letter){
  let [i, j] = prevIJ;
  
  let ijs = [[i-1, j], [i+1, j], [i, j-1], [i, j+1]];
  ijs = ijs.filter(e => !e.some(p => p < 0) && !e.some(p => p >= board.length));
  
  
  for(let k = 0; k < ijs.length; k++){
      let [first, second] = ijs[k];
      
      if(board[first][second] === letter){
          return [first, second]
      }

  }
    return null;
}