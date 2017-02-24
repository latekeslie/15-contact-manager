import reducer from '../app/reducer';

module('reducer', () => {
  test('find all contacts with empty list', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expected = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(oldState, action), expected);
  });
});
