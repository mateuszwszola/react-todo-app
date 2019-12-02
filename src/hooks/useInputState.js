import { useState } from 'react';

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleReset() {
    setValue('');
  }

  return [value, handleChange, handleReset];
}

export default useInputState;
