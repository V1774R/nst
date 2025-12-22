import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const AreaBemvindo = styled.div`

    color: #b4b4b4;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    h1{
        text-align: center;
    }
`

export const BemVindo = () => {
    const navigate = useNavigate()

    return (
        <AreaBemvindo>
            <h1>Núcleo Setorial de Tecnologia</h1>
            <p>Bem-vindos ao nosso sistema.</p>
            <button onClick={() => { navigate("/projetos") }}>Projetos</button>
        </AreaBemvindo>
    )
}