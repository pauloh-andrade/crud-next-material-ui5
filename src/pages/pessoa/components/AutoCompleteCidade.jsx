import { CidadeService } from '../../../services/api/cidades/CidadesService';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { UseDebounce } from '../../../hooks';
import { useMemo } from 'react';
import { useField } from '@unform/core';

const AutoCompleteCidade = ({ isExternalLoading = false }) => {
	const { fieldName, registerField, defaultValue, error, clearError } = useField('cidadeId');

	const { debounce } = UseDebounce();
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [busca, setBusca] = useState('');
	const [selectedId, setSelectedId] = useState(defaultValue);

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => selectedId,
			setValue: (_, newSelectedId) => setSelectedId(newSelectedId),
		});
	}, [registerField, fieldName, selectedId]);

	useEffect(() => {
		setIsLoading(true);
		debounce(() => {
			CidadeService.getAll(1, busca).then(result => {
				setIsLoading(false);
				if (result instanceof Error) {
					//alert(result.message);
				} else {
					setOptions(result.data.map(cidade => ({ id: cidade.id, label: cidade.nome })));
				}
			});
		});
	}, [busca]);

	const autoCompleteSelectedOption = useMemo(() => {
		if (!selectedId) return null;

		const selectedOption = options.find(option => option.id === selectedId);
		if (!selectedOption) return null;

		return selectedOption;
	}, [selectedId, options]);

	return (
		<Autocomplete
			value={autoCompleteSelectedOption}
			onChange={(_, newValue) => {
				setSelectedId(newValue?.id);
				setBusca('');
				clearError();
			}}
			options={options}
			loading={isLoading}
			disabled={isExternalLoading}
			disablePortal
			openText="Abrir"
			closeText="Fechar"
			noOptionsText="Nenhuma opção encontrada"
			loadingText="...carregando"
			onInputChange={(_, newValue) => setBusca(newValue)}
			renderInput={params => <TextField {...params} error={!!error} helperText={error} label="Cidade" />}
			popupIcon={isLoading || isExternalLoading ? <CircularProgress size={28} /> : undefined}
		/>
	);
};

export { AutoCompleteCidade };
