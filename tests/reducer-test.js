import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('CONTACT@FIND_ALL', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const newState = reducer(oldState, action);
    const expectedState = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.equal(newState.contacts.firstName, expectedState.contacts.firstName, 'first names match');
  });

  test('CONTACT@FIND_ALL', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const newState = reducer(oldState, action);
    const expectedState = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.equal(newState.contacts.firstName, expectedState.contacts.firstName, 'first names match');
  });

  test('CONTACT@FIND_ALL', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };
    const newState = reducer(oldState, action);
    const expectedState = { contacts: [{ firstName: 'Nic', lastName: 'Cage' }] };

    assert.equal(newState.contacts.firstName, expectedState.contacts.firstName, 'first names match');
  })

  test('CONTACT@CREATE', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const newState = reducer(oldState, action);
    const expectedState = { contacts: [{ firstName: 'Johnny', lastName: 'Depp' }] };

    assert.equal(newState.contacts.firstName, expectedState.contacts.firstName, 'first names match');
  });

  test('CONTACT@CREATE', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const newState = reducer(oldState, action);

    assert.equal(newState.contacts.length, 2, 'it has two items in the array');
  });

  test('CONTACT@REMOVE the only item based on id', (assert) => {
    const oldState = { contacts: [{ firstName: 'Pad', lastName: 'Thai', id: 'cat' }] };
    const action = { type: 'CONTACT@REMOVE', data: 'cat' };
    const newState = reducer(oldState, action);

    assert.deepEqual(newState, { contacts: [] }, 'it removes the only contact');

  });

  test('CONTACT@REMOVE based on id leave all others', (assert) => {
    const oldState = { contacts: [{ firstName: 'Pad', lastName: 'Thai', id: 'cat' }, { firstName: 'Mr.', lastName: 'Sniffles', id: 'othercat' }] };
    const action = { type: 'CONTACT@REMOVE', data: 'othercat' };
    const expectedState = { contacts: [{ firstName: 'Pad', lastName: 'Thai', id: 'cat' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  test('CONTACT@REMOVE with an id that doesn\'t exist in the contacts array', (assert) => {
    const oldState = { contacts: [{ firstName: 'Pad', lastName: 'Thai', id: 'cat' }] };
    const action = { type: 'CONTACT@REMOVE', data: 'dog' };
    const expectedState = { contacts: [{ firstName: 'Pad', lastName: 'Thai', id: 'cat' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
});
