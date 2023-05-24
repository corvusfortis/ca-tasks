var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let nxt = null;


  while(curr !== null){
      nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
  }

  head = prev;

  return head;

};