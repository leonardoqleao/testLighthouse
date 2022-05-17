import { useState , createContext } from "react";

export const OptionsNavbarContext = createContext({
    selected: '',
    setSelected: ()=>{}
});
export const OptionsNavbarProvider = ({ children }) => {

    const [selected, setSelected] = useState({Dashboard: 'selected'})
    return (
        <OptionsNavbarContext.Provider value={{selected, setSelected}}>
            {children}
        </OptionsNavbarContext.Provider>
    )
}