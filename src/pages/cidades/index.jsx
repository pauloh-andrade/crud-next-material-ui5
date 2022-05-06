import { useRouter } from 'next/router';

import { useEffect, useMemo, useState } from 'react';
import { FerramentasDaListagem } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';

const ListagemDeCidade = () => {
	const router = useRouter();

	const [searchParams, setSearchParams] = useState(router.query);

	useEffect(() => {
		// Always do navigations after the first render/cidades/? busca=${search}
		router.push({ pathname: '/cidades', query: { busca: search } }, undefined, { shallow: true });
		console.log(router.query);
	}, [search]);

	const busca = useMemo(() => {
		const { busca } = router.query;
		return busca;
	});

	// useEffect(() => {
	// 	router.push(`/cidades/?aaa=aaaa`, undefined, { shallow: true });
	// }, []);

	return (
		<LayoutBase
			titulo="Controle de cidades"
			barraDeFerramentas={
				<FerramentasDaListagem
					mostrarInputBusca
					textoBusca={search}
					aoMudarTextoDeBusca={e => setSearchParams({ ...searchParams, e })}
					textoBotaoNovo="nova"
					mostrarBotaoSalvarEVoltar
				/>
			}>
			testeando
		</LayoutBase>
	);
};

export default ListagemDeCidade;
