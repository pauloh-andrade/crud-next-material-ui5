import { Button } from "@mui/material";

import { ThemeContext, useAppThemeContext } from "../shared/contexts";

const Home = () => {
  const {toggleTheme} = useAppThemeContext(ThemeContext);

  return (
       <Button variant="contained" color="primary" onClick={toggleTheme}>
        Teste
      </Button>
  );
}

export default Home;