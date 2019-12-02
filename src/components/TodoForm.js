import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { Paper, TextField } from '@material-ui/core';
import { TodosDispatchContext } from '../contexts/todosContext';

function TodoForm() {
  const dispatch = useContext(TodosDispatchContext);
  const [task, handleTaskChange, handleReset] = useInputState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (task !== '') {
      dispatch({ type: 'ADD_TODO', task });
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
