import { Button } from "@mui/material";
import { MenuLateral } from "../shared/componnents";

import { useDrawerContext } from "../shared/contexts";

const Home = () => {
  const {toggleDrawerOpen} = useDrawerContext();

  return (
    <>
      <MenuLateral>
        <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
          Toggle Drawer
        </Button>
      </MenuLateral>
    </>
  );
}

export default Home;