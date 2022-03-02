import { Button } from "@mui/material";
import { MenuLateral } from "../shared/componnents";

import { ThemeContext, useAppThemeContext } from "../shared/contexts";

const Home = () => {
  const {toggleTheme} = useAppThemeContext(ThemeContext);

  return (
    <>
      <MenuLateral>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          Teste
        </Button>
      </MenuLateral>
    </>
  );
}

export default Home;