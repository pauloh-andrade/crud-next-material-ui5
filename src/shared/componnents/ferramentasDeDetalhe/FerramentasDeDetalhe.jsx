import { Box, useTheme, Paper, Button, Icon, Divider } from "@mui/material";

export const FerramentasDeDetalhe = () =>{
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
           <Button 
                color="primary" 
                variant="contained" 
                startIcon={<Icon>save</Icon>} 
                disableElevation
                >
                Salvar
            </Button>
            <Button 
                color="primary" 
                variant="outlined" 
                startIcon={<Icon>save</Icon>} 
                disableElevation
                >
                Salvar e voltar
            </Button>
            <Button 
                color="primary" 
                variant="outlined" 
                startIcon={<Icon>delete</Icon>} 
                disableElevation
                >
                Apagar
            </Button>
            <Button 
                color="primary" 
                variant="outlined" 
                startIcon={<Icon>add</Icon>} 
                disableElevation
                >
                Novo
            </Button>
            <Divider variant="middle" orientation="vertical" />
            <Button 
                color="primary" 
                variant="outlined" 
                startIcon={<Icon>arrow_back</Icon>} 
                disableElevation
                >
                voltar
            </Button>
        </Box>
    );
};