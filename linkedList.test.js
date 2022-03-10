const { CircularList } = require('./linkedList');

describe('Testing append method', () => {
  const list = new CircularList();
  test('Should return a new node', () => {
    list.append('a');
    expect(list.get(0)).toBe('a');
  });
  test('Should return length of a list', () => {
    const list = new CircularList();
    list.append('a');
    expect(list.getLength()).toBe(1);
  });
});

describe('Testing getLength method', () => {
  const list = new CircularList();
  test('Should return a length of an empty list' , () => {
    expect(list.getLength()).toBe(0);
  });
  test('Should return the length of list with three nodes', () => {
    ['a', 'b', 'c'].forEach(node => list.append(node));
    expect(list.getLength()).toBe(3);
  });
});

describe('Testing delete method', () => {
  const list = new CircularList();
  ['a', 'b', 'c'].forEach(node => list.append(node));
  test('Should return value of deleted node', () => {
    expect(list.delete(0)).toBe('a');
  });
  test('Should throw an error if incorrect index', () => {
    expect(() => list.delete(-1)).toThrow(Error);
    expect(() => list.delete(4.3)).toThrow(Error);
  });
  test('Should trow an error if index bigger than length of list', () => {
    expect(() => list.delete(list.getLength() + 1)).toThrow(Error);
  });
});

describe('Testing extend method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  const list2 = new CircularList();
  list2.append('c');
  test('Should add nodes from one list to the tail of anothe list' , () => {
    list.extend(list2);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
  });
   test('Should return a new length of list', () => {
     expect(list.getLength()).toBe(3);
   });
});

describe('Testing clear method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  test('Should return length of an empty list', () => {
    list.clear();
    expect(list.getLength()).toBe(0);
  });
});

describe('Testing clone method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  test('Should return a copy of a list', () => {
    const list2 = list.clone();
    expect(list2.get(0)).toBe(list.get(0));
    expect(list2.get(1)).toBe(list.get(1));
  });
  test('Should return a copy of length of list', () => {
    const list2 = list.clone();
    expect(list2.getLength()).toBe(list.getLength());
  });
});

describe('Testing insert method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  test('Should return a new length of list', () => {
    list.insert('w', 0);
    expect(list.getLength()).toBe(3);
  });
  test('Should insert value at position', () => {
    expect(list.get(0)).toBe('w');
    expect(list.get(1)).toBe('a');
    expect(list.get(2)).toBe('b');
  });
  test('Should throw an error if incorrect index', () => {
    expect(() => list.insert('q', 10)).toThrow(Error);
    expect(() => list.insert('q', 'hello')).toThrow(Error);
  });
});

describe('Testing get method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  test('Should throw an error if incorrect index', () => {
    expect(() => list.get(-1)).toThrow(Error);
    expect(() => list.get(4)).toThrow(Error);
    expect(() => list.get('nya')).toThrow(Error);
  });
  test('Should return a value of node', () => {
    expect(list.get(1)).toBe('b');
  });
});

describe('Testing findFirst method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  list.append('a');
  list.append('c');
  test('Should return position of the first value', () => {
    expect(list.findFirst('a')).toBe(0);
  });
  test('Should return -1 if data are not in the list', () => {
    expect(list.findFirst('T')).toBe(-1);
  });
});

describe('Testing findLast method', () => {
  const list = new CircularList();
  list.append('a');
  list.append('b');
  list.append('a');
  list.append('c');
  test('Should return position of the last value', () => {
    expect(list.findLast('a')).toBe(2);
  });
  test('Should return -1 if data are not in the list', () => {
    expect(list.findLast('T')).toBe(-1);
  });
});
