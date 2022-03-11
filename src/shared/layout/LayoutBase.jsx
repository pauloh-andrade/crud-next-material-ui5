import { IconButton, useTheme, Icon, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

const LayoutBase = ({children, titulo}) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm")); 

    const {toggleDrawerOpen} = useDrawerContext();


    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" padding={1} height={theme.spacing(12)} gap={1}>
                {smDown && (
                <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>
                )}
                <Typography variant="h5"> 
                    {titulo}
                </Typography>
            </Box>
            <Box>
                Barra de Ferramentas
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    );   
};

export default LayoutBase;