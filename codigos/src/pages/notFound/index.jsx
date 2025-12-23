import styled from "styled-components"
import { Link } from "react-router-dom"

const Erro = styled.h1`
    font-size: 5rem;
    color: aliceblue;

`

const AreaErro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    p{
        color: aliceblue;
    }
    a{
        color: aliceblue;
        text-decoration: none;
        background-color: #757070;
        width: 120px;
        text-align: center;
        padding: 12px;
        border-radius: 4px;

    }
`

export const NotFound = () => {
    return(
        <AreaErro>
            <Erro> 404 </Erro>
            <p> Página não encontrada. </p>
            <Link to={"/"}> Início </Link>
        </AreaErro>
    )
}