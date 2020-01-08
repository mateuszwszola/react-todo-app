import { useState, useEffect } from 'react';

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleReset() {
    setValue(initialValue);
  }

  return [value, handleChange, handleReset];
}

export default useInputState;
