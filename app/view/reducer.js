export default function reducer(state) {
  return state;
}
//
// export default function reducer(state, action) {
//   switch (action.type) {
//     case 'CONTACT@CREATE':
//       return { [action.data, ...state.contact] };
//     case 'CONTACT@FIND_ALL':
//       return { contact: action.data };
//     default:
//       return state || { contact: [] };
//     }
// };
