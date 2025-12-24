import styled from 'styled-components'
import { BotaoSuperior } from '../botaoSuperior'

const CabecalhoEstilizado = styled.div`
    background-color: var(--cor-cabecalho);
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 200;
`

const Logo = styled.img`
    width: 100px;
`

export const Cabecalho = () => {
    return(
        <CabecalhoEstilizado>
            <Logo src="/imgs/logo.png" alt="logo do site" />
            <BotaoSuperior />
        </CabecalhoEstilizado>
    )
}