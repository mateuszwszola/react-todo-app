import { getRandomId } from './helpers';

export function addTodo(todos, task) {
	return [ ...todos, { id: getRandomId(), task, completed: false } ];
}

export function removeTodo(todos, todoId) {
	return todos.filter((todo) => todo.id !== todoId);
}

export function toggleCompleted(todos, todoId) {
	return todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
}

export function editTodo(todos, todoId, newTodoTask) {
	return todos.map(
		(todo) =>
			todo.id === todoId
				? {
						...todo,
						task: newTodoTask
					}
				: todo
	);
}
