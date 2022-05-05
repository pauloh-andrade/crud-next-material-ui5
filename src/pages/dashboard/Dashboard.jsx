import { FerramentasDeDetalhe } from '../../componnents';
import LayoutBase from '../../layout/LayoutBase';

const Dashboard = () => {
	return (
		<LayoutBase titulo="Página Inicial" barraDeFerramentas={<FerramentasDeDetalhe mostrarBotaoSalvarEVoltar />}>
			testeando
		</LayoutBase>
	);
};

export default Dashboard;
