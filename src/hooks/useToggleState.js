import { useState } from 'react';

function useToggleState(initialValue = false) {
	const [ isToggle, setIsToggle ] = useState(initialValue);

	const toggle = () => setIsToggle(!isToggle);

	return [ isToggle, toggle ];
}

export default useToggleState;
