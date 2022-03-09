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
