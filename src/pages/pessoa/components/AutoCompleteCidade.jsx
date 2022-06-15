import { CidadeService } from '../../../services/api/cidades/CidadesService';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { UseDebounce } from '../../../hooks';

const AutoCompleteCidade = () => {
	const { debounce } = UseDebounce();
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [busca, setBusca] = useState('');

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

	return (
		<Autocomplete
			loading={isLoading}
			popupIcon={isLoading ? <CircularProgress size={28} /> : undefined}
			onInputChange={(_, newValue) => setBusca(newValue)}
			options={options}
			renderInput={params => <TextField {...params} label="Cidade" />}
		/>
	);
};

export { AutoCompleteCidade };
