import { Button, ThemeProvider } from "@mui/material";
import { LightTheme } from "../shared/themes";

const Home = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Button variant="contained" color="primary">
        Teste
      </Button>
    </ThemeProvider>
  )
};

export default Home;