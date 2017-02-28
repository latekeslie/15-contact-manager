/**
* @param  {Object} state  Old state from the app
* @param  {Object} action Redux action (I hope it has a "type" and "data")
* @return {Object} new state { contacts: [...] }
*/
export default function reducer(state, action) {
  console.log('hello');
  switch (action.type) {
    // CREATE: Add a new contact
    case 'CONTACT@CREATE':
      return { contacts: [action.data, ...state.contacts] };
    // READ: Loading all contacts
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
    // Delete: delete a contact
    case 'CONTACT@REMOVE':
      const contacts = state.contacts.filter((contact) => {
        return contact.id !== action.data
      });

      console.log(contacts);

      return { contacts: contacts };
    default:
      return state || { contacts: [] };
  }
}
