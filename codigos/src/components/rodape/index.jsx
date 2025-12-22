import styled from "styled-components"

const RodapeEstilizado = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--cor-rodape);
    color: #1b1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Rodape = () => {
    return(
        <RodapeEstilizado>
            <p>Todos os direitos reservados.</p>
        </RodapeEstilizado>
    )
}