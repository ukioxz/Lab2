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

  findFirst(data){
  let curEl = this.head;
  while(curEl){
    if(data !== undefined && curEl.data === data){
      return curEl;
    }
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
    curEl = curEl.prev;
  }
  return null;
}

  clone(){
    const newCircularList = new CircularList();
    let curEl = this.head;
    for(let i = 0; i < this.length; i++){
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
  var temp = this.head;
  var prev = null;
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

  reverse(){
    let curEl = this.head;
    let backEl = null;
    let nextEl = null;
    while(curEl != null && curEl.next != this.head){
      nextEl = curEl;
      curEl = curEl.next;
      nextEl.next = backEl;
      backEl = nextEl;
    }
    this.head.next = curEl;
    if(backEl != null){
      curEl.next = backEl;
    }
    this.head = curEl;
  }

  clear() {
   this.head = null;
   this.tail = null;
   this.length = 0;
  }
}

const list = new CircularList();
