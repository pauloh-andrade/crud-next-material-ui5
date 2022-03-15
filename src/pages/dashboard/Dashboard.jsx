import { FerramentasDeDetalhe } from "../../shared/componnents";
import LayoutBase from "../../shared/layout/LayoutBase";

const Dashboard = () =>{
    return(
        <LayoutBase 
            titulo="Página Inicial" 
            barraDeFerramentas={(
                <FerramentasDeDetalhe mostrarBotaoSalvarEVoltar/>
            )}>
            testeando
        </LayoutBase>
    );
};

export default Dashboard;