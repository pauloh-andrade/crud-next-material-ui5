import { useCallback, useMemo, useState, createContext, useContext } from "react";


//criando context
const DrawerContext = createContext({});

//hook do context
const useDrawerContext = () =>{
    //Retorna o valor atual do contexto para esse contexto.
    return useContext(DrawerContext);
}

const DrawerProvider = ({children}) =>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    //arrow para abrir e fechar menu
    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen=> !oldDrawerOpen);
    }, []);

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
}

export {
    DrawerContext,
    useDrawerContext,
    DrawerProvider
};