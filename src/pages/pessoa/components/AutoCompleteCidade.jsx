import { CidadeService } from '../../../services/api/cidades/CidadesService';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { UseDebounce } from '../../../hooks';
import { useMemo } from 'react';

const AutoCompleteCidade = ({ isExternalLoading = false }) => {
	const { debounce } = UseDebounce();
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [busca, setBusca] = useState('');
	const [selectedId, setSelectedId] = useState(undefined);

	useEffect(() => {
		console.log(isExternalLoading);
	}, [isExternalLoading]);

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
		if (!selectedId) return undefined;
		const selectedOption = options.find(option => option.id === selectedId);
		return selectedOption;
	}, [selectedId, options]);

	return (
		<Autocomplete
			value={autoCompleteSelectedOption}
			onChange={(_, newValue) => {
				setSelectedId(newValue?.id);
				setBusca('');
			}}
			options={options}
			loading={isLoading}
			disabled={isExternalLoading}
			onInputChange={(_, newValue) => setBusca(newValue)}
			renderInput={params => <TextField {...params} label="Cidade" />}
			popupIcon={isLoading ? <CircularProgress size={28} /> : undefined}
		/>
	);
};

export { AutoCompleteCidade };
