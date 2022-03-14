import { Box, Button, TextField, Paper, useTheme, Icon } from "@mui/material";

export const FerramentasDaListagem = ({
    textoBusca = "", 
    mostrarInputBusca = false, 
    aoMudarTextoDeBusca, 
    aoClicarEmNovo,
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true
}) =>{
    const theme = useTheme();
    //<Box component={Paper}>
    //podemos herdar propriedadas de outros coponentes a partir do component
    return (
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
            {mostrarInputBusca && (
                <TextField  
                size="small" 
                placeholder="Pesquisar..."
                onChange={(e)=> aoMudarTextoDeBusca?.(e.target.value)}
                value={textoBusca}
                />
            )}
            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo && (
                    <Button 
                        color="primary" 
                        variant="contained" 
                        endIcon={<Icon>add</Icon>} 
                        disableElevation
                        onClick={aoClicarEmNovo}
                        >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box> 
    );
};