/**
* @param  {Object} state  Old state from the app
* @param  {Object} action Redux action (I hope it has a "type" and "data")
* @return {Object} new state { contacts: [...] }
*/
export default function reducer(state, action) {
  switch (action.type) {
    // CREATE: Add a new contact
    case 'CONTACT@CREATE':
      console.log(action.data)
      return { contacts: [action.data, ...state.contacts] };
    // READ: Loading all contacts
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
    default:
      return state || { contacts: [] };
  }
}
