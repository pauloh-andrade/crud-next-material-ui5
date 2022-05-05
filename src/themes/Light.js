import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

//configurando tema da aplicação
/*
    palette -> paleta de cores
*/
export const LightTheme = createTheme({
    palette: {
        primary:{
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: "#ffffff",
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: "#ffffff",
        },
        background: {
            paper: "#ffffff",
            default: "#f7F6F3",
        }
    }
});