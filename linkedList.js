class ListNode{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}
class CircularList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  append(data){
    const node ={data, next: this.head}

    if(this.tail){
      this.tail.next = node
    }

    if(!this.head){
      this.head = node
    }
    this.tail = node
  }

  getLength(){
    let counter = 0;
    let node = this.head;
    if(this.head != null){
      do{
        node = node.next;
        counter++;
      } while (node != this.head);
    }
    return counter;
  }

  insert(element, index){
    if (index < 0 || index > this.getLength())
        return console.log("Please enter a valid index.");
    else {
        let node = new ListNode(element);
        let curr, prev;
        curr = this.head;

        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let count = 0;

            while (count < index) {
                count++;
                prev = curr;
                curr = curr.next;
            }

            node.next = curr;
            prev.next = node;
        }
    }
}


  findFirst(data){
    let count = 0;
    let curEl = this.head;
    while(curEl){
      if(data !== undefined && curEl.data === data){
        return count;
      }
      count++;
      curEl = curEl.next;
    }
    return null;
  }

  get(index){
    if (index < 0 || index >= this.getLength()) {
      throw new Error("Invalid index");
    }
    let tmp = this.head;
        for(let i = 0; i < this.getLength(); i++){
            if(i === index) return tmp.data;

            tmp = tmp.next;
        }
  }

  findLast(data){
    let curEl = this.tail;
    while(curEl){
      if(data !== undefined && curEl.data === data){
        return curEl;
      }
      curEl = curEl.next;
    }
    return -1;
  }

  clone(){
    let newCircularList = new CircularList();
    let curEl = this.head;
    for(let i = 0; i < this.getLength(); i++){
      newCircularList.append(curEl.data);
      curEl = curEl.next;
    }
    return newCircularList;
  }

  deleteAll(key) {
    if (this.head == null)
    {
      console.log("Empty linked list");
      return;
    }
    let temp = this.head;
    let prev = null;
    if (temp.data == key)
    {
      if (temp.next == temp)
      {
        this.head = null;
      }
      else
      {
        while (temp.next != this.head)
        {
          temp = temp.next;
        }
        temp.next = this.head.next;
        prev = this.head;
        this.head = prev.next;
      }
    }
  }

  delete(index){
    if(index > 0 && index > this.getLength()){
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    for(let i = 0; i < this.getLength(); i++){
        if(i === index) return current.data;

        current = current.next;
    }

    if(index === 0){
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
  }

  reverse(){
   let backHead = this.head;
   let currEl = null;
   let backEl = this.tail;
   let nextEl = this.head.next;

   while(currEl !== this.head){
       if(currEl === null) currEl = this.head;

       currEl.next = backEl;
       backEl = currEl;
       currEl = nextEl;
       nextEl = currEl.next;
   }

   this.head = this.tail;
   this.tail = backHead;

  }

  clear() {
   this.head = null;
   this.tail = null;
   this.length = 0;
  }

}

const list = new CircularList();
list.append("A");
list.append("B");
list.append("C")
list.append("E")
list.append("B")
list.append(2)
//list.findFirst("A")
//list.findLast("B")
//console.log(list.findFirst("B"))
//console.log(list.findLast("B"));
//list.getLength();
//list.deleteAll("A")
//list.clear();
//list.insert(3, 1);
//console.log(list.delete(0))
//console.log(list.findFirst("t"));
//console.log(list.get(2))

//console.log(list.findFirst(2));
list.reverse();
//console.log(list.delete(0));
//console.log(list.get(0));
//console.log(list.clone());
console.log(list.getLength());
console.log(list);
