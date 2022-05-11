import { useCallback, useRef } from 'react';

const UseDebounce = (delay = 1000, notDelayInFirstTime = true) => {
	const debouncing = useRef();
	const isFirstTime = useRef(notDelayInFirstTime);

	const debounce = useCallback(func => {
		if (isFirstTime.current) {
			isFirstTime.current = false;
			func();
		} else {
			if (debouncing.current) {
				clearTimeout(debouncing.current);
			}

			debouncing.current = setTimeout(() => func(), delay);
		}
	}, []);

	return { debounce };
};

export { UseDebounce };
