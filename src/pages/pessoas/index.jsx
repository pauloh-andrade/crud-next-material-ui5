import { useRouter } from 'next/router';

import { useEffect, useMemo, useState } from 'react';
import { FerramentasDaListagem } from '../../componnents';
import { PessoaService } from '../../services/api/pessoas/PessoasService';
import LayoutBase from '../../layout/LayoutBase';

const ListagemDePessoas = () => {
	const router = useRouter();

	const definirParametros = texto => {
		router.push({ pathname: '/pessoas', query: texto }, undefined, {
			shallow: true,
		});
	};
	const busca = useMemo(() => {
		return router.query.busca;
	});

	useEffect(() => {
		PessoaService.getAll(1, router.query.busca).then(result => {
			if (result instanceof Error) {
				alert(result.message);
			} else {
				console.log(result);
			}
		});
	});

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
			testeando
		</LayoutBase>
	);
};

export default ListagemDePessoas;
