import { getRandomId } from '../helpers';

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: getRandomId(),
          task: action.task,
          completed: false,
          list: action.list
        }
      ];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.todoId);
    case 'TOGGLE_COMPLETED':
      return state.map(todo =>
        todo.id === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.todoId
          ? {
              ...todo,
              task: action.newTask
            }
          : todo
      );
    case 'MOVE_TODO':
      return state.map(todo =>
        todo.id === action.todoId
          ? {
              ...todo,
              list: action.newList
            }
          : todo
      );
    default:
      return state;
  }
}

export default todosReducer;
