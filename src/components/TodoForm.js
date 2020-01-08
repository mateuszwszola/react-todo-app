import React, { useContext, useEffect } from 'react';
import { Paper, TextField } from '@material-ui/core';
import { TodosDispatchContext } from '../contexts/todosContext';
import useInputState from '../hooks/useInputState';
import useLocationCurrentList from '../hooks/useLocationCurrentList';

function TodoForm() {
  const dispatch = useContext(TodosDispatchContext);
  const [task, handleTaskChange, handleReset] = useInputState('');
  const currentList = useLocationCurrentList();

  useEffect(() => {
    function handleKeyDownPress(e) {
      console.log(e);
    }
    document.addEventListener('keydown', handleKeyDownPress);
    return document.removeEventListener('keydown', handleKeyDownPress);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (task !== '') {
      dispatch({ type: 'ADD_TODO', task, listId: currentList.id });
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
