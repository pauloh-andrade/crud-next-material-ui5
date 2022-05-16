import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { PessoaService } from '../../services/api/pessoas/PessoasService';
import { FerramentasDeDetalhe } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';
import { VTextField } from '../../forms';
import { Form } from '@unform/web';

const DetalheDePessoas = () => {
	const router = useRouter();
	const id = router.query.id;

	const formRef = useRef(null);

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

	const handleSave = data => {
		console.log(data);
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
					aoClicarEmSalvar={() => formRef.current?.submitForm()}
					aoClicarEmSalvarEVoltar={() => formRef.current?.submitForm()}
					aoClicarEmApagar={() => handleDelete(Number(id))}
					aoClicarEmNovo={() => router.push('/pessoa/nova')}
					aoClicarEmVoltar={() => router.push('/pessoa')}
				/>
			}>
			<Form ref={formRef} onSubmit={datas => handleSave(datas)}>
				<VTextField name="nomeCompleto" />
				<VTextField name="email" />
				<VTextField name="cidadeId" />
				<button type="submit">Subimit</button>
			</Form>
		</LayoutBase>
	);
};

export default DetalheDePessoas;
