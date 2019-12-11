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
    case 'REMOVE_LIST':
      return state.filter(list => list.id !== action.listId);
    default:
      return state;
  }
}

export default todoListsReducer;
