import { Button } from "@mui/material";
import { useEffect } from "react";
import { MenuLateral } from "../shared/componnents";

import { useDrawerContext } from "../shared/contexts";
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  const {setDrawerOptions } = useDrawerContext();

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
        <Dashboard>

        </Dashboard>
      </MenuLateral>
    </>
  );
}

export default Home;