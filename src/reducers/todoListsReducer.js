import { getRandomId } from '../helpers';
import slugify from 'slugify';

function todoListsReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: getRandomId(),
          name: action.name,
          url: `/${slugify(action.name.toLowerCase())}`,
          role: 'custom'
        }
      ];
    case 'CHANGE_NAME':
      return state.map(list =>
        list.id === action.listId
          ? {
              ...list,
              name: action.newListName,
              url: `/${slugify(action.newListName.toLowerCase())}`
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
