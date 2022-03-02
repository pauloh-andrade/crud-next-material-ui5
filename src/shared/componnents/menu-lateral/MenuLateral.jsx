import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import { Home } from "@mui/icons-material"
import { Box } from "@mui/system";

export const MenuLateral = ({children}) =>{
    //utilizando useTheme para trabalhar com a unidade de medida spacing(num*4=?px)
    const theme = useTheme();
    /*
    *   Drawer -> Componente de menu Lateral
    *   Box -> Componente para encapsular, como uma div
    *   Avatar -> Componente para perfil do usuário
    *   Divider -> Componente para a criação de uma linha divisora
    *   List -> Componente de lista
    *   ListItem -> Componente de item da lista ListItem(Button, Text, Icon)
    */
    return(
        <>
            <Drawer open={true} variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar 
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                            alt="Paulo Henrique" 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                        />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial"/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}