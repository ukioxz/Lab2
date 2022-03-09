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
