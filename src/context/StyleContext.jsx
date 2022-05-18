import { useState, createContext } from "react";

const styleClass = {
    navbarLeft: 'navbarLeft navbarLeftClose',
    navbarOptions: 'navbarOptions navbarOptionsClose',
    navbarSignOut: 'navbarSignOut navbarSignOutClose',
    dashboard: 'dashboard dashboardW',
    navbarLogo: 'navbarLogo navbarLogoW',
    navbarTop2: 'navbarTop2 navbarTop2w'
}

export const OptionsStyleContext = createContext({
    style: {},
    setStyle: () => { }
});
export const OptionsStyleProvider = ({ children }) => {

    const [style, setStyle] = useState(styleClass)
    return (
        <OptionsStyleContext.Provider value={{ style, setStyle }}>
            {children}
        </OptionsStyleContext.Provider>
    )
}