const { CircularList } = require('./linkedList');

describe('Testing append method', () =>{
  test('Should return a new node', () => {
    const list = new CircularList();
    list.append('a');
    expect(list.get(0)).toBe('a');
  });
  test('Should return length of a list', () => {
    const list = new CircularList();
    list.append('a');
    expect(list.getLength()).toBe(1);
  });
});
