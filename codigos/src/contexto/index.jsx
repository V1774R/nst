import { createContext, useEffect, useReducer } from "react"

export const ContextoGlobal = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case "ALTERNAR_MENU":
            return {...state, menu: !state.menu}
        case "FECHAR_MENU":
            return {...state, menu: false}
        default:
            return state
    }
}

export const ContextoGlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        menu: false
    })

    return(
        <ContextoGlobal.Provider value={{state, dispatch}}>
            {children}
        </ContextoGlobal.Provider>
    )
}