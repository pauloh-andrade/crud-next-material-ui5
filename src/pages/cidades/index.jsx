import { useRouter } from 'next/router';

import { useEffect, useMemo, useState } from 'react';
import { FerramentasDaListagem } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';

const ListagemDeCidade = () => {
	const router = useRouter();

	const [params, setParams] = useState({
		busca: router.query.busca,
		tipo: router.query.tipo,
	});

	useEffect(() => {
		router.push({ pathname: '/cidades', query: params.busca ? params : router.query }, undefined, {
			shallow: true,
		});
	}, [router.isReady, params]);

	return (
		<LayoutBase
			titulo="Controle de cidades"
			barraDeFerramentas={
				<FerramentasDaListagem
					mostrarInputBusca
					textoBusca={params.busca ? params.busca : router.query.busca}
					aoMudarTextoDeBusca={setParams}
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
