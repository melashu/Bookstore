export const categorieStatus = () => ({
  type: 'STATUS',
  message: 'Under construction',
});

const categorieReducer = (state = [], action) => {
  switch (action.type) {
    case 'STATUS':
      return 'Under construction';
    default:
      return state;
  }
};

export default categorieReducer;
