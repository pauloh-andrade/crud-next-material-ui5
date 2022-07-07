import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CidadeService } from '../../services/api/cidades/CidadesService';
import { PessoaService } from '../../services/api/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';

const Dashboard = () => {
	const [isLoadingCidades, setIsLoadingCidades] = useState(true);
	const [totalCountCidades, setTotalCountCidades] = useState(0);

	const [isLoadingPessoas, setIsLoadingPessoas] = useState(true);
	const [totalCountPessoas, setTotalCountPessoas] = useState(0);

	useEffect(() => {
		setIsLoadingCidades(true);
		setIsLoadingPessoas(true);

		CidadeService.getAll(1).then(result => {
			setIsLoadingCidades(false);
			if (result instanceof Error) {
				alert(result.message);
			} else {
				setTotalCountCidades(result.totalCount);
			}
		});

		PessoaService.getAll(1).then(result => {
			setIsLoadingPessoas(false);
			if (result instanceof Error) {
				alert(result.message);
			} else {
				setTotalCountPessoas(result.totalCount);
			}
		});
	}, []);
	return (
		<LayoutBase titulo="Página Inicial" barraDeFerramentas={<FerramentasDaListagem mostrarBotaoNovo={false} />}>
			<Box width="100%" display="flex">
				<Grid container margin={1}>
					<Grid item container spacing={2}>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h5" align="center">
										Total de Cidades
									</Typography>
									<Box padding={6} display="flex" justifyContent="center" alignItems="center">
										{!isLoadingCidades && <Typography variant="h1">{totalCountCidades}</Typography>}
										{isLoadingCidades && <Typography variant="h6">Carregando...</Typography>}
									</Box>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h5" align="center">
										Total de Pessoas
									</Typography>
									<Box padding={6} display="flex" justifyContent="center" alignItems="center">
										{!isLoadingPessoas && <Typography variant="h1">{totalCountPessoas}</Typography>}
										{isLoadingPessoas && <Typography variant="h6">Carregando...</Typography>}
									</Box>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</LayoutBase>
	);
};

export default Dashboard;
