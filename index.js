var hasCycle = function(head) {
  let vals = [];
  let curr = head;

  while(curr !== null){

     if(vals.some(e => e === curr.val)){
         return true;
     }

      vals.push(curr.val);
      curr = curr.next;

  }

  return false;

};