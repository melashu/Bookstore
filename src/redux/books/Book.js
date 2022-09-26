export const bookActionCreator = (type, book) => ({
  type,
  book,
});

const bookReducer = (state = [], action) => {
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
