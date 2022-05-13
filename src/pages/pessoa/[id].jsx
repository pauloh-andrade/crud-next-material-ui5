import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FerramentasDeDetalhe } from '../../componnents';
import { PessoaService } from '../../services/api/pessoas/PessoasService';
import LayoutBase from '../../layout/LayoutBase';
import { LinearProgress } from '@mui/material';

const DetalheDePessoas = () => {
	const router = useRouter();
	const id = router.query.id;

	const [isLoading, setIsLoading] = useState(false);
	const [nome, setNome] = useState(false);

	useEffect(() => {
		if (id !== 'nova') {
			setIsLoading(true);
			PessoaService.getById(id).then(result => {
				setIsLoading(false);
				if (result instanceof Error) {
					alert(result.message);
					router.push('/pessoa');
				} else {
					setNome(result.nomeCompleto);
					console.log(result);
				}
			});
		}
	}, [id]);

	const handleSave = () => {
		console.log('save');
	};

	const handleDelete = id => {
		if (confirm('Tem certeza que deseja apagar?')) {
			PessoaService.deleteById(id).then(result => {
				if (result instanceof Error) {
					alert(result.message);
				} else {
					alert('registro apagado com sucesso');
					router.push('/pessoa');
				}
			});
		}
	};

	return (
		<LayoutBase
			titulo={id === 'nova' ? 'Cadastrar Pessoa' : nome}
			barraDeFerramentas={
				<FerramentasDeDetalhe
					textBoataoNovo="Nova"
					mostrarBotaoSalvarEFechar
					mostrarBotaoNovo={router.query.id !== 'nova'}
					mostrarBotaoApagar={router.query.id !== 'nova'}
					aoClicarEmSalvar={() => handleSave()}
					aoClicarEmSalvarEVoltar={() => handleSave()}
					aoClicarEmApagar={() => handleDelete(Number(id))}
					aoClicarEmNovo={() => router.push('/pessoa/nova')}
					aoClicarEmVoltar={() => router.push('/pessoa')}
				/>
			}>
			{isLoading && <LinearProgress variant="indeterminate" />}
		</LayoutBase>
	);
};

export default DetalheDePessoas;
