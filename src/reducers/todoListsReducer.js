import { getRandomId } from '../helpers';

function todoListsReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: getRandomId(),
          name: action.name,
          url: `/${action.name.toLowerCase()}`
        }
      ];
    case 'CHANGE_NAME':
      return state.map(list =>
        list.id === action.listId
          ? {
              ...list,
              name: action.newListName,
              url: `/${action.newListName.toLowerCase()}`
            }
          : list
      );
    case 'REMOVE_LIST':
      return state.filter(list => list.id !== action.listId);
    default:
      return state;
  }
}

export default todoListsReducer;
