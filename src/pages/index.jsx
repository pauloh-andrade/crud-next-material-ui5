import { Button } from "@mui/material";
import { useEffect } from "react";
import { MenuLateral } from "../shared/componnents";

import { useDrawerContext } from "../shared/contexts";

const Home = () => {
  const {toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(()=>{
    setDrawerOptions([
      {
        icon: 'home',
        path: '/',
        label: "Página inicial  "
      },
      {
        icon: 'star',
        path: '/a',
        label: "Página"
      },
    ])
  }, [])

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