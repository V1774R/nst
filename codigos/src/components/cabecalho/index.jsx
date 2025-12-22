import styled from 'styled-components'

const CabecalhoEstilizado = styled.div`
    background-color: var(--cor-cabecalho);
    height: 80px;

`

const Logo = styled.img`
    width: 100px;
`

export const Cabecalho = () => {
    return(
        <CabecalhoEstilizado>
            <Logo src="/imgs/logo.png" alt="logo do site" />
        </CabecalhoEstilizado>
    )
}