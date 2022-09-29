export const bookActionCreator = (type, book) => ({
  type,
  book,
});

const bookReducer = (
  state = [
    { title: 'Rich dad poor dad', author: 'Ropert K', id: 0 },
    { title: 'Think and grow rich', author: 'Napolion H', id: 1 },
  ],
  action,
) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
