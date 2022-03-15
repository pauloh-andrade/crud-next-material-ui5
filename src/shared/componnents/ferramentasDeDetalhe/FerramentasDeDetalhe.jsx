import { Box, useTheme, Paper, Button, Icon, Divider, Skeleton } from "@mui/material";

export const FerramentasDeDetalhe = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    mostrarBotaoApagar= true,
    mostarBotaoSalvar= true,
    mostrarBotaoSalvarEVoltar = false,
    mostrarBotaoVoltar = true,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoApagarCarregando= false,
    mostarBotaoSalvarCarregando= false,
    mostrarBotaoSalvarEVoltarCarregando= false,
    mostrarBotaoVoltarCarregando= false,

    aoClicarEmNovo,
    aoClicarEmSalvar,
    aoClicarEmSalvarEVoltar,
    aoClicarEmApagar,
    aoClicarEmVoltar
}) =>{
    const theme = useTheme();
    return(
        <Box 
        height={theme.spacing(5)} 
        gap={1}
        marginX={1} 
        padding={1} 
        paddingX={2} 
        display="flex"
        alignItems="center"
        component={Paper}
        >
            {(mostarBotaoSalvar && !mostarBotaoSalvarCarregando) && (
                <Button 
                    color="primary" 
                    variant="contained" 
                    startIcon={<Icon>save</Icon>} 
                    disableElevation
                    >
                    Salvar
                </Button>
            )}
            {mostarBotaoSalvarCarregando && (
                <Skeleton width={110} height={60}/>
            )}
            {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltar) && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>save</Icon>} 
                    disableElevation
                    >
                    Salvar e voltar
                </Button>
            )}
            {mostrarBotaoSalvarEVoltarCarregando && (
                <Skeleton width={170} height={60}/>
            )}
            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>delete</Icon>} 
                    disableElevation
                    >
                    Apagar
                </Button>
            )}
            {mostrarBotaoApagarCarregando && (
                <Skeleton width={110} height={60}/>
            )}
            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>add</Icon>} 
                    disableElevation
                    >
                    {textoBotaoNovo}
                </Button>
            )}
            {mostrarBotaoNovoCarregando && (
                <Skeleton width={95} height={60}/>
            )}
            <Divider variant="middle" orientation="vertical" />
            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando)&& (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>arrow_back</Icon>} 
                    disableElevation
                    >
                    voltar
                </Button>
            )}
            {mostrarBotaoVoltarCarregando && (
                <Skeleton width={110} height={60}/>
            )}
        </Box>
    );
};