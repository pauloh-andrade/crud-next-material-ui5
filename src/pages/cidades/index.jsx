import { useRouter } from 'next/router';

import { useEffect, useMemo, useState } from 'react';
import { FerramentasDaListagem } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';

const ListagemDeCidade = () => {
	const router = useRouter();

	// const [params, setParams] = useState();

	const definirParametros = texto => {
		router.push({ pathname: '/cidades', query: texto }, undefined, {
			shallow: true,
		});
	};
	const busca = useMemo(() => {
		return router.query.busca;
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
					params={params}
				/>
			}>
			testeando
		</LayoutBase>
	);
};

export default ListagemDeCidade;
