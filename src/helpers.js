import uuid from 'uuid';

export function getRandomId() {
  return uuid.v4().replace(/-/g, '');
}

export function extractListIdFromUrl(url) {
  return url ? url.split('-').reverse()[0] : null;
}

export function createInitialTodoLists() {
  function createInitialTodoList(names, role) {
    return names.map(name => {
      if (role === 'main') {
        return {
          id: name,
          name,
          url: name === 'tasks' ? '/' : `/${name}`,
          role
        };
      } else {
        const id = getRandomId();

        return {
          id,
          name,
          url: `/${name}-${id}`,
          role
        };
      }
    });
  }

  const mainLists = createInitialTodoList(
    ['tasks', 'important', 'planned'],
    'main'
  );
  const customLists = createInitialTodoList(
    ['work', 'private', 'groceries'],
    'custom'
  );
  return [...mainLists, ...customLists];
}

export function firstLetterUpper(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function addTodo(todos, task) {
  return [
    ...todos,
    { id: getRandomId(), task, completed: false, list: 'tasks' }
  ];
}

export function removeTodo(todos, todoId) {
  return todos.filter(todo => todo.id !== todoId);
}

export function toggleCompleted(todos, todoId) {
  return todos.map(todo =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  );
}

export function editTodo(todos, todoId, newTodoTask) {
  return todos.map(todo =>
    todo.id === todoId
      ? {
          ...todo,
          task: newTodoTask
        }
      : todo
  );
}
