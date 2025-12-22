import styled from "styled-components"

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
    return(
        <AreaBemvindo>
            <h1>Núcleo Setorial de Tecnologia</h1>
            <p>Bem-vindos ao nosso sistema.</p>        
            <button>Projetos</button>
        </AreaBemvindo>
    )
}