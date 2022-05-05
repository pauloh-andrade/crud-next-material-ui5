import { FerramentasDaListagem } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';

const ListagemDeCidade = () => {
	return (
		<LayoutBase
			titulo="Controle de cidades"
			barraDeFerramentas={<FerramentasDaListagem mostrarInputBusca textoBotaoNovo="nova" mostrarBotaoSalvarEVoltar />}>
			testeando
		</LayoutBase>
	);
};

export default ListagemDeCidade;
