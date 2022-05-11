import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { PessoaService } from '../../services/api/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../componnents';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LayoutBase from '../../layout/LayoutBase';
import { UseDebounce } from '../../hooks';

const ListagemDePessoas = () => {
	const router = useRouter();
	const { debounce } = UseDebounce();

	const [rows, setRows] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState([]);

	const definirParametros = texto => {
		router.push({ pathname: '/pessoas', query: texto }, undefined, {
			shallow: true,
		});
	};
	const busca = useMemo(() => {
		return router.query.busca;
	}, [router.query]);

	useEffect(() => {
		setIsLoading(true);
		debounce(() => {
			PessoaService.getAll(1, router.query.busca).then(result => {
				setIsLoading(false);
				if (result instanceof Error) {
					alert(result.message);
				} else {
					setRows(result.data);
					setTotalCount(result.totalCount);
					console.log(rows);
				}
			});
		});
	}, [busca]);

	return (
		<LayoutBase
			titulo="Controle de cidades"
			barraDeFerramentas={
				<FerramentasDaListagem
					mostrarInputBusca
					textoBusca={busca}
					aoMudarTextoDeBusca={texto => definirParametros(texto)}
					textoBotaoNovo="nova"
					mostrarBotaoSalvarEVoltar
				/>
			}>
			<TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Ações</TableCell>
							<TableCell>Nome Completo</TableCell>
							<TableCell>E-mail</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id}>
								<TableCell>Ações</TableCell>
								<TableCell>{row.nomeCompleto}</TableCell>
								<TableCell>{row.email}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</LayoutBase>
	);
};

export default ListagemDePessoas;
