import { useState } from 'react';
import { getRandomId } from '../helpers';

function useTodosState(initialTodos) {
	const [ todos, setTodos ] = useState(initialTodos);

	return {
		todos,
		addTodo(task) {
			setTodos([ ...todos, { id: getRandomId(), task, completed: false } ]);
		},
		removeTodo(todoId) {
			setTodos(todos.filter((todo) => todo.id !== todoId));
		},
		toggleCompleted(todoId) {
			setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)));
		},
		editTodo(todoId, newTodoTask) {
			setTodos(
				todos.map(
					(todo) =>
						todo.id === todoId
							? {
									...todo,
									task: newTodoTask
								}
							: todo
				)
			);
		}
	};
}

export default useTodosState;
