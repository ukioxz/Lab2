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
    while(true){
    if(this.head === null){
      counter += 0;
      break;
    }
    if(node === this.tail){
      counter += 1;
      break;
    }

        node = node.next;
        counter++;

    }
    return counter;
  }


  insert(element, index){
    if (/*index < 0 ||*/ index > this.getLength() - 1 || typeof index != 'number'){
        throw new Error("Please enter a valid index.");
      }
        let node = new ListNode(element);
        let curr = this.head;
        let count = 0;

        if (index == 0) {
            node.next = this.head;
            this.head = node;
            this.tail.next = node;
        } else {
            while (count < index - 1) {
                count++;
                curr = curr.next;
            }
        }
}


  findFirst(data){
    let curEl = this.head;
    for(let i = 0; i < this.getLength(); i++){
        if(curEl.data === data) return i;

        curEl = curEl.next;
    }
    return -1;
  }

  get(index){
    if (index < 0 || index >= this.getLength() || typeof index != 'number') {
      throw new Error("Invalid index");
    }
    let tmp = this.head;
        for(let i = 0; i < this.getLength(); i++){
            if(i === index) return tmp.data;

            tmp = tmp.next;
        }
  }

  findLast(data){
    let result = -1;
    let curEl = this.head;
    for(let i = 0; i < this.getLength(); i++){
        if(curEl.data === data) result = i;

        curEl = curEl.next;
    }
    return result;
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
    if(typeof index != 'number'){
      throw new Error ('Incorrect index');
    }
    if(index !== Number.isInteger(index) && index < 0){
      throw new Error ('Incorrect index');
    }
    if(index > this.getLength()){
      throw new Error('Index is bigger than length of list')
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

  extend(list){
   let tmp = list.head;
    for(let i = 0; i < list.getLength(); i++){
        this.append(tmp.data);
        tmp = tmp.next;
    }
  }
}


const list = new CircularList();
list.append("A");
list.append("B");
list.append("C")
list.append("E")
list.append("B")
list.append(2)
const list2 = new CircularList();
list2.append("W");
//list.findFirst("A")
//list.findLast("B")
//console.log(list.findFirst("B"))
/console.log(list.findLast("B"));
//list.getLength();
//list.deleteAll("A")
//list.clear();
//list.insert(3, -1);
//console.log(list.delete(0))
//console.log(list.findFirst("t"));
//console.log(list.get(2))

//console.log(list.findFirst(2));
//list.reverse();
//console.log(list.delete(0));
//console.log(list.get(0));
//console.log(list.clone());

//list.extend(list2);
console.log(list.getLength())
console.log(list);

module.exports = {CircularList};
