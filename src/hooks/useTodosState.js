import useLocalStorageState from './useLocalStorageState';
import { addTodo, removeTodo, toggleCompleted, editTodo } from '../actions/todoActions';

function useTodosState(initialTodos = []) {
	const [ todos, setTodos ] = useLocalStorageState('todos', initialTodos);

	return {
		todos,
		addTodo(task) {
			setTodos(addTodo(todos, task));
		},
		removeTodo(todoId) {
			setTodos(removeTodo(todos, todoId));
		},
		toggleCompleted(todoId) {
			setTodos(toggleCompleted(todos, todoId));
		},
		editTodo(todoId, newTodoTask) {
			setTodos(editTodo(todos, todoId, newTodoTask));
		}
	};
}

export default useTodosState;
