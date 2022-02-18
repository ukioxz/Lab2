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

  clone(){
    const newCircularList = new CircularList();
    let curEl = this.head;
    for(let i = 0; i < this.length; i++){
      newCircularList.append(curEl.data);
      curEl = curEl.next;
    }
    return newCircularList;
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
}

const list = new CircularList();
