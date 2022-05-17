import { useState , createContext } from "react";

const styleClass = {

}

export const OptionsStyleContext = createContext({
    style: {},
    setStyle: ()=>{}
});
export const OptionsStyleProvider = ({ children }) => {

    const [style, setStyle] = useState(styleClass)
    return (
        <OptionsStyleContext.Provider value={{style, setStyle}}>
            {children}
        </OptionsStyleContext.Provider>
    )
}