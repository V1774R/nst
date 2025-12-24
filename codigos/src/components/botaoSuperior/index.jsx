import { useContext } from "react"
import styled from "styled-components"
import { ContextoGlobal } from "../../contexto"

const Container = styled.div`
    width: 50px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    @media(min-width: 700px){
        display: none;
    }
`
const Bola = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: #000000;
`


export const BotaoSuperior = () => {
    const {state, dispatch} = useContext(ContextoGlobal)

    return(
        <Container onClick={()=>{dispatch({type: "ALTERNAR_MENU"})}}>
            <Bola></Bola>
            <Bola></Bola>
            <Bola></Bola>                        
        </Container>
    )
}