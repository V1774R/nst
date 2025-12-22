import { createContext, useEffect, useReducer } from "react"

export const ContextoGlobal = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case "":
            return {} 
        default:
            return state
    }
}

export const ContextoGlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {

    })

    return(
        <ContextoGlobal.Provider value={{state, dispatch}}>
            {children}
        </ContextoGlobal.Provider>
    )
}