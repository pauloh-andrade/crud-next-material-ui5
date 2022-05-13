import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { PessoaService } from '../../services/api/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';
import { Environment } from '../../environment';
import { UseDebounce } from '../../hooks';
import {
	Icon,
	IconButton,
	LinearProgress,
	Pagination,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TableRow,
} from '@mui/material';

const ListagemDePessoas = () => {
	const router = useRouter();
	const { debounce } = UseDebounce();

	const [rows, setRows] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState([]);

	const definirParametros = texto => {
		router.replace({ pathname: '/pessoa', query: texto }, undefined, {
			shallow: true,
		});
	};
	const busca = useMemo(() => {
		return router.query.busca;
	}, [router.query]);

	const pagina = useMemo(() => {
		return router.query.pagina || 1;
	}, [router.query.pagina]);

	useEffect(() => {
		setIsLoading(true);
		debounce(() => {
			PessoaService.getAll(pagina, router.query.busca).then(result => {
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
	}, [busca, pagina]);

	const handleClickDelete = id => {
		if (confirm('Tem certeza que deseja apagar?')) {
			PessoaService.deleteById(id).then(result => {
				if (result instanceof Error) {
					alert(result.message);
				} else {
					setRows(oldRows => {
						return [...oldRows.filter(oldRow => oldRow.id !== id)];
					});
					alert('registro apagado com sucesso');
				}
			});
		}
	};

	return (
		<LayoutBase
			titulo="Controle de cidades"
			barraDeFerramentas={
				<FerramentasDaListagem
					mostrarInputBusca
					textoBusca={busca}
					textoBotaoNovo="nova"
					mostrarBotaoSalvarEVoltar
					aoMudarTextoDeBusca={texto => definirParametros(texto)}
					aoClicarEmNovo={() => router.push('pessoas/detalhe/nova')}
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
								<TableCell>
									<IconButton size="small" onClick={() => handleClickDelete(row.id)}>
										<Icon>delete</Icon>
									</IconButton>
									<IconButton size="small" onClick={() => router.push({ pathname: `/pessoa/${row.id}` })}>
										<Icon>edit</Icon>
									</IconButton>
								</TableCell>
								<TableCell>{row.nomeCompleto}</TableCell>
								<TableCell>{row.email}</TableCell>
							</TableRow>
						))}
					</TableBody>

					<TableFooter>
						{totalCount == 0 && !isLoading && <captions>{Environment.LISTAGEM_VAZIA}</captions>}
						{isLoading && (
							<TableRow>
								<TableCell colSpan={3}>
									<LinearProgress variant="indeterminate" />
								</TableCell>
							</TableRow>
						)}
						{totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS && (
							<TableRow>
								<TableCell colSpan={3}>
									<Pagination
										page={parseInt(pagina)}
										count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
										onChange={(e, newPage) => {
											definirParametros({ ...router.query, pagina: newPage });
											console.log(newPage);
										}}
									/>
								</TableCell>
							</TableRow>
						)}
					</TableFooter>
				</Table>
			</TableContainer>
		</LayoutBase>
	);
};

export default ListagemDePessoas;
