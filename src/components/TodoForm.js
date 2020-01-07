import React, { useContext, useEffect } from 'react';
import useInputState from '../hooks/useInputState';
import { Paper, TextField } from '@material-ui/core';
import { TodosDispatchContext } from '../contexts/todosContext';
import { TodoListsContext } from '../contexts/todoListsContext';
import useLocationListName from '../hooks/useLocationListName';

function TodoForm() {
  const dispatch = useContext(TodosDispatchContext);
  const todoLists = useContext(TodoListsContext);
  const listName = useLocationListName();
  const [task, handleTaskChange, handleReset] = useInputState('');

  const list = todoLists.find(list => list.name === listName);
  const listId = list ? list.id : '1';

  useEffect(() => {
    function handleKeyDownPress(e) {
      console.log(e);
    }
    window.addEventListener('keydown', handleKeyDownPress);
    return window.removeEventListener('keydown', handleKeyDownPress);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (task !== '') {
      dispatch({ type: 'ADD_TODO', task, listId });
      handleReset();
    }
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={task}
          onChange={handleTaskChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
