import { BarraDeFerramentas } from "../../shared/componnents";
import LayoutBase from "../../shared/layout/LayoutBase";

const Dashboard = () =>{
    return(
        <LayoutBase 
            titulo="Página Inicial" 
            barraDeFerramentas={(
                <BarraDeFerramentas mostrarInputBusca textoBotaoNovo="Nova"/>
            )}>
            testeando
        </LayoutBase>
    );
};

export default Dashboard;