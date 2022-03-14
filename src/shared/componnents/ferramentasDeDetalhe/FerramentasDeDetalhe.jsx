import { Box, useTheme, Paper, Button, Icon, Divider } from "@mui/material";

export const FerramentasDeDetalhe = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    mostrarBotaoApagar= true,
    mostarBotaoSalvar= true,
    mostrarBotaoSalvarEVoltar = false,
    mostrarBotaoVoltar = true,

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
            {mostarBotaoSalvar && (
                <Button 
                    color="primary" 
                    variant="contained" 
                    startIcon={<Icon>save</Icon>} 
                    disableElevation
                    >
                    Salvar
                </Button>
            )}
            {mostrarBotaoSalvarEVoltar && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>save</Icon>} 
                    disableElevation
                    >
                    Salvar e voltar
                </Button>
            )}
            {mostrarBotaoApagar && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>delete</Icon>} 
                    disableElevation
                    >
                    Apagar
                </Button>
            )}
            {mostrarBotaoNovo && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>add</Icon>} 
                    disableElevation
                    >
                    {textoBotaoNovo}
                </Button>
            )}
            
            <Divider variant="middle" orientation="vertical" />
            {mostrarBotaoVoltar && (
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<Icon>arrow_back</Icon>} 
                    disableElevation
                    >
                    voltar
                </Button>
            )}
        </Box>
    );
};