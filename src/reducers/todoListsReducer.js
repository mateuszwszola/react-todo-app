import { getRandomId } from '../helpers';
import slugify from 'slugify';

function todoListsReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST': {
      const randomId = getRandomId();
      return [
        ...state,
        {
          id: randomId,
          name: action.name,
          url: `/${slugify(action.name)}-${randomId}`,
          role: 'custom'
        }
      ];
    }
    case 'CHANGE_NAME': {
      return state.map(list =>
        list.id === action.id
          ? {
              ...list,
              name: action.name,
              url: `/${slugify(action.name)}-${list.id}`
            }
          : list
      );
    }
    case 'REMOVE_LIST': {
      return state.filter(list => list.id !== action.id);
    }
    default:
      return state;
  }
}

export default todoListsReducer;
