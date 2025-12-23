import styled from "styled-components"

const RodapeEstilizado = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--cor-rodape);
    color: #1b1b1b;
    display: none;
    justify-content: center;
    align-items: center;

    @media(min-width: 700px){
        display: flex;
    }
`


export const Rodape = () => {
    return(
        <RodapeEstilizado>
            <p>Todos os direitos reservados.</p>
        </RodapeEstilizado>
    )
}