import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useField } from '@unform/core';

const VTextField = ({ name, ...rest }) => {
	const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [registerField, fieldName, value]);

	return (
		<TextField
			{...rest}
			error={!!error}
			helperText={error}
			defaultValue={defaultValue}
			onKeyDown={() => (error ? clearError() : undefined)}
			value={value}
			onChange={e => setValue(e.target.value)}></TextField>
	);
};

export { VTextField };
