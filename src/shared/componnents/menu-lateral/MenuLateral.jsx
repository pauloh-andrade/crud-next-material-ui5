import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme} from "@mui/material";
import { Box } from "@mui/system";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useRouter } from "next/router";

const ListItemLink = ({to, icon, label, onClick }) =>{
    const router = useRouter();
    const selected = router.pathname == to? true : false;
    const handleClick = () =>{
        router.push(to);
        //se onClick não for nulo, execta a função.
        onClick?.();
    };

    return(
        <ListItemButton selected={selected} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    );
}

export const MenuLateral = ({children}) =>{
    //utilizando useTheme para trabalhar com a unidade de medida spacing(num*4=?px)
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();
    /*
    *   Drawer -> Componente de menu lateral 
    *       -open: recebe true ou false para definir se o menu será exibido
    *       -onClose: executa função que alterna entre true ou false quando clicado fora do menu
    *   Box -> Componente para encapsular, como uma div
    *   Avatar -> Componente para perfil do usuário
    *   Divider -> Componente para a criação de uma linha divisora
    *   List -> Componente de lista
    *   ListItem -> Componente de item da lista ListItem(Button, Text, Icon)
    */
    return(
        <>  
            <Drawer open={isDrawerOpen} variant={smDown? "temporary": "permanent"} onClose={toggleDrawerOpen}>
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
                            {drawerOptions.map(drawerOptions =>(
                                <ListItemLink 
                                key={drawerOptions.path}
                                icon={drawerOptions.icon}
                                to={drawerOptions.path}
                                label={drawerOptions.label}
                                onClick={smDown? toggleDrawerOpen : undefined}
                            />
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                <Icon>dark_mode</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Alternar tema"/>
                        </ListItemButton>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}