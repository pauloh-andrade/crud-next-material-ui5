import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Grid, Paper, Box, Typography, LinearProgress } from '@mui/material';
import * as yup from 'yup';

import { CidadeService } from '../../services/api/cidades/CidadesService';
import { FerramentasDeDetalhe } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';
import { VTextField, VForm, useVForm } from '../../forms';

const formValidationSchema = yup.object().shape({
	nome: yup.string().required().min(5),
});

const DetalheDePessoas = () => {
	const router = useRouter();
	const id = router.query.id;

	const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();

	const [isLoading, setIsLoading] = useState(false);
	const [nome, setNome] = useState(false);

	useEffect(() => {
		if (id !== 'nova' && router.isReady) {
			setIsLoading(true);
			CidadeService.getById(id).then(result => {
				setIsLoading(false);
				if (result instanceof Error) {
					alert(result.message);
					router.push('/cidade');
				} else {
					setNome(result.nome);
					console.log(result);

					formRef.current?.setData(result);
				}
			});
		} else {
			formRef.current?.setData({
				nome: '',
			});
		}
	}, [id]);

	const handleSave = data => {
		//abortEarly: true -> para a validação no primeiro erro
		formValidationSchema
			.validate(data, { abortEarly: false })
			.then(validatedData => {
				setIsLoading(true);
				if (id === 'nova') {
					CidadeService.create(validatedData).then(result => {
						setIsLoading(false);
						if (result instanceof Error) {
							alert(result.message);
						} else {
							if (isSaveAndClose()) {
								router.push(`/cidade`);
							} else {
								router.push(`/cidade/${result}`);
							}
						}
					});
				} else {
					CidadeService.updateById(id, validatedData).then(result => {
						setIsLoading(false);
						if (result instanceof Error) {
							alert(result.message);
						} else {
							if (isSaveAndClose()) {
								router.push(`/cidade`);
							}
						}
					});
				}
			})
			.catch(errors => {
				const validationErrors = {};
				errors.inner.forEach(error => {
					if (!error.path) return;
					validationErrors[error.path] = error.message;
				});
				formRef.current?.setErrors(validationErrors);
			});
	};

	const handleDelete = id => {
		if (confirm('Tem certeza que deseja apagar?')) {
			CidadeService.deleteById(id).then(result => {
				if (result instanceof Error) {
					alert(result.message);
				} else {
					alert('registro apagado com sucesso');
					router.push('/cidade');
				}
			});
		}
	};

	return (
		<LayoutBase
			titulo={id === 'nova' ? 'Cadastrar cidade' : nome}
			barraDeFerramentas={
				<FerramentasDeDetalhe
					textBoataoNovo="Nova"
					mostrarBotaoSalvarEFechar
					mostrarBotaoNovo={router.query.id !== 'nova'}
					mostrarBotaoApagar={router.query.id !== 'nova'}
					aoClicarEmSalvar={save}
					aoClicarEmSalvarEVoltar={saveAndClose}
					aoClicarEmApagar={() => handleDelete(Number(id))}
					aoClicarEmNovo={() => router.push('/cidade/nova')}
					aoClicarEmVoltar={() => router.push('/cidade')}
				/>
			}>
			<VForm ref={formRef} onSubmit={datas => handleSave(datas)}>
				<Box margin={1} display="flex" flexDirection="column" component={Paper} variant="outlined">
					<Grid container direction="column" padding={2} spacing={2}>
						{isLoading && (
							<Grid item>
								<LinearProgress variant="indeterminate" />
							</Grid>
						)}
						<Grid item>
							<Typography variant="h6" fontFamily="poppins" fontWeight={600}>
								Geral
							</Typography>
						</Grid>
						<Grid container item direction="row">
							<Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
								<VTextField
									fullWidth
									name="nome"
									label="Nome"
									placeholder="Nome"
									disabled={isLoading}
									onChange={e => setNome(e.target.value)}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</VForm>
		</LayoutBase>
	);
};

export default DetalheDePessoas;
