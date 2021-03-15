const ui = {
    newBook: false,
};
export default function auth(state = ui, action) {
  switch(action.type) {
    case 'OPEN_ADD_NEW_BOOK':
      return Object.assign({}, state, { newBook: true });
    case 'CLOSE_ADD_NEW_BOOK':
      return Object.assign({}, state, { newBook: false });
    default:
      return state;
  }
}
