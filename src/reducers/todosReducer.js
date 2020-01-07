import { getRandomId } from '../helpers';

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: getRandomId(),
          task: action.task,
          completed: false,
          listId: action.listId
        }
      ];
    }
    case 'REMOVE_TODO': {
      return state.filter(todo => todo.id !== action.id);
    }
    case 'TOGGLE_COMPLETED': {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case 'EDIT_TODO': {
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              task: action.task
            }
          : todo
      );
    }
    case 'MOVE_TODO': {
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              listId: action.listId
            }
          : todo
      );
    }
    default:
      return state;
  }
}

export default todosReducer;
